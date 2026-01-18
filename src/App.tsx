import React, { useState, useMemo } from "react";
import type { Part } from "./Types";
import ModalWindow from "./ModalWindow";
import TableWindow from "./TableWindow";
import ControlsWindow from "./ControlsWindow";
import Navigation from "./Navigation";
import { handleOpenFile, saveToFile } from "./fileSystemAPI";

declare global {
  interface Window {
    showOpenFilePicker: (options?: any) => Promise<FileSystemFileHandle[]>;
  }
}

const App: React.FC = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle | null>(
    null,
  );

  // Состояние модалки
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPart, setCurrentPart] = useState<Part | null>(null);

  // CRUD Операции
  const handleSavePart = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPart?.id) {
      setParts(parts.map((p) => (p.id === currentPart.id ? currentPart : p)));
    } else {
      setParts([
        ...parts,
        { ...currentPart!, id: crypto.randomUUID() } as Part,
      ]);
    }
    setIsModalOpen(false);
  };

  const deletePart = (id: string) => {
    if (confirm("Удалить запчасть?"))
      setParts(parts.filter((p) => p.id !== id));
  };

  const filteredParts = useMemo(() => {
    return parts.filter(
      (p) =>
        (p.Model?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.Articul?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedBrand === "" || p.Brand === selectedBrand),
    );
  }, [searchTerm, selectedBrand, parts]);

  const brands = useMemo(
    () => Array.from(new Set(parts.map((p) => p.Brand))).sort(),
    [parts],
  );

  return (
    <div className='min-h-screen bg-slate-50 font-sans text-slate-900'>
      <Navigation
        handleOpenFile={() =>
          handleOpenFile({ setFileHandle, setLoading, setParts })
        }
        saveToFile={() => saveToFile({ fileHandle, parts })}
        fileHandle={fileHandle}
      />

      <main className='mx-auto max-w-7xl p-6'>
        <ControlsWindow
          brands={brands}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          setCurrentPart={setCurrentPart}
          setIsModalOpen={setIsModalOpen}
        />

        <TableWindow
          parts={parts}
          filteredParts={filteredParts}
          setCurrentPart={setCurrentPart}
          setIsModalOpen={setIsModalOpen}
          deletePart={deletePart}
        />
      </main>

      {isModalOpen && (
        <ModalWindow
          currentPart={currentPart}
          setIsModalOpen={setIsModalOpen}
          setCurrentPart={setCurrentPart}
          handleSavePart={handleSavePart}
        />
      )}
    </div>
  );
};

export default App;
