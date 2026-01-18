import { X } from "lucide-react";
import type { ModalType } from "./Types";

const ModalWindow = ({
  currentPart,
  setIsModalOpen,
  setCurrentPart,
  handleSavePart,
}: ModalType) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4'>
      <div className='w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200'>
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
              value={currentPart?.Brand}
              onChange={(e) =>
                setCurrentPart({ ...currentPart!, Brand: e.target.value })
              }
            />
            <input
              required
              placeholder='Модель'
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.Model}
              onChange={(e) =>
                setCurrentPart({ ...currentPart!, Model: e.target.value })
              }
            />
          </div>
          <input
            placeholder='Двигатель'
            className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
            value={currentPart?.Engine}
            onChange={(e) =>
              setCurrentPart({ ...currentPart!, Engine: e.target.value })
            }
          />
          <input
            required
            placeholder='Название запчасти'
            className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
            value={currentPart?.PartName}
            onChange={(e) =>
              setCurrentPart({ ...currentPart!, PartName: e.target.value })
            }
          />
          <input
            required
            placeholder='Артикул'
            className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
            value={currentPart?.Articul}
            onChange={(e) =>
              setCurrentPart({ ...currentPart!, Articul: e.target.value })
            }
          />
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
