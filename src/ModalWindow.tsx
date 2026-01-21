import { X } from "lucide-react";
import type { ModalType } from "./Types";

const partOptions = [
  "Масляный фильтр",
  "Воздушный фильтр",
  "Салонный фильтр",
  "Топливный фильтр",
  "Коробочный фильтр",
];

const ModalWindow = ({
  currentPart,
  setIsModalOpen,
  setCurrentPart,
  handleSavePart,
}: ModalType) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4'>
      <div className='w-full max-w-1/2 rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-xl font-bold'>
            {currentPart?.id ? "Редактировать" : "Новая запись"}
          </h3>
          <button
            onClick={() => setIsModalOpen(false)}
            className='text-slate-400 hover:text-slate-600'
          >
            <X />
          </button>
        </div>
        <form onSubmit={handleSavePart} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <input
              required
              placeholder='Марка'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.Brand || ""}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  Brand: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              required
              placeholder='Модель'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.Model}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  Model: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <input
              required
              placeholder='Дата выпуска'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.StartDateCar}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  StartDateCar: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              required
              placeholder='Конец выпуска'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.EndDateCar}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  EndDateCar: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <input
              required
              placeholder='Объем двигателя'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.EngineCapacity}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  EngineCapacity: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул двигателя'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.EngineArticle}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  EngineArticle: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          <select
            required
            className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none'
            value={currentPart?.Detail}
            onChange={(e) =>
              setCurrentPart({ ...currentPart!, Detail: e.target.value })
            }
          >
            <option value='' disabled>
              Выберите название запчасти
            </option>
            {partOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className='grid grid-cols-3 gap-4'>
            <input
              placeholder='Артикул детали ASAKASHI'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_ASAKASHI}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_ASAKASHI: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали SCT'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_SCT}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_SCT: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали YUMIKO'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_YUMIKO}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_YUMIKO: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <input
              placeholder='Артикул детали OLIMP'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_OLIMP}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_OLIMP: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали JAPANPARTS'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_JAPANPARTS}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_JAPANPARTS: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали MANN'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_MANN}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_MANN: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <input
              placeholder='Артикул детали KNECHT'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_KNECHT}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_KNECHT: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали MASUMA'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_MASUMA}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_MASUMA: e.target.value.toUpperCase(),
                })
              }
            />
            <input
              placeholder='Артикул детали BOSCH'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_BOSCH}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_BOSCH: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
          <div className='grid grid-cols-1 gap-4'>
            <input
              placeholder='Артикул детали OTHERS'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.PartName_OTHERS}
              onChange={(e) =>
                setCurrentPart({
                  ...currentPart!,
                  PartName_OTHERS: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          <button
            type='submit'
            className='w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition'
          >
            Сохранить изменения
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
