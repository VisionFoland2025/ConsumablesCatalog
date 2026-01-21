import * as XLSX from "xlsx";
import type { HandleOpenFileType, Part, SaveToFileType } from "./Types";

export const verifyPermission = async (
  fileHandle: FileSystemFileHandle,
  readWrite: boolean,
): Promise<boolean> => {
  const options: FileSystemHandlePermissionDescriptor = {
    mode: readWrite ? "readwrite" : "read",
  };

  if ((await fileHandle.queryPermission(options)) === "granted") {
    return true;
  }

  if ((await fileHandle.requestPermission(options)) === "granted") {
    return true;
  }

  return false;
};

const saveToFile = async ({ fileHandle, parts }: SaveToFileType) => {
  if (!fileHandle) return alert("Сначала откройте файл!");

  const hasWritePermission = await verifyPermission(fileHandle, true);
  if (!hasWritePermission) {
    alert("Нет разрешения на запись в файл. Пожалуйста, подтвердите доступ.");
    return;
  }

  try {
    const worksheet = XLSX.utils.json_to_sheet(parts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Parts");
    const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    const writable = await fileHandle.createWritable();
    await writable.write(buffer);
    await writable.close();
    alert("Файл успешно перезаписан!");
  } catch (err: any) {
    console.error("Ошибка при записи файла:", err);
    if (err.name === "NotAllowedError") {
      alert("Доступ был запрещен во время записи.");
    } else {
      alert(
        "Ошибка сохранения. Закройте файл в Excel, если он открыт, и попробуйте снова.",
      );
    }
  }
};

const handleOpenFile = async ({
  setFileHandle,
  setLoading,
  setParts,
}: HandleOpenFileType) => {
  try {
    const [handle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Excel Files",
          accept: {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
              [".xlsx"],
          },
        },
      ],
    });
    setFileHandle(handle);
    setLoading(true);

    const file = await handle.getFile();
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const data = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]],
    ) as Part[];

    const dataWithIds = data.map((item, idx) => ({
      ...item,
      id: item.id || crypto.randomUUID(),
    }));
    setParts(dataWithIds);
  } catch (err) {
    console.error("Ошибка открытия", err);
  } finally {
    setLoading(false);
  }
};

export { saveToFile, handleOpenFile };
