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
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-2 sm:p-4'>
      <div className='w-full sm:max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white p-4 sm:p-8 shadow-2xl animate-in fade-in zoom-in duration-200'>
        <div className='flex items-center justify-between mb-6 sticky top-0 bg-white py-2 z-10 border-b border-slate-100'>
          <h3 className='text-lg sm:text-xl font-bold'>
            {currentPart?.id ? "Редактировать запись" : "Новая запись"}
          </h3>
          <button
            onClick={() => setIsModalOpen(false)}
            className='text-slate-400 hover:text-slate-600 p-2 transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSavePart} className='space-y-6'>
          <div className='space-y-4'>
            <p className='text-sm font-semibold text-slate-500 uppercase tracking-wider'>
              Данные автомобиля
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
                value={currentPart?.Model || ""}
                onChange={(e) =>
                  setCurrentPart({
                    ...currentPart!,
                    Model: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              <input
                required
                placeholder='Год от'
                className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
                value={currentPart?.StartDateCar || ""}
                onChange={(e) =>
                  setCurrentPart({
                    ...currentPart!,
                    StartDateCar: e.target.value.toUpperCase(),
                  })
                }
              />
              <input
                required
                placeholder='Год до'
                className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
                value={currentPart?.EndDateCar || ""}
                onChange={(e) =>
                  setCurrentPart({
                    ...currentPart!,
                    EndDateCar: e.target.value.toUpperCase(),
                  })
                }
              />
              <input
                required
                placeholder='Тип топлива'
                className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition col-span-2 sm:col-span-1'
                value={currentPart?.EnginneType || ""}
                onChange={(e) =>
                  setCurrentPart({
                    ...currentPart!,
                    EnginneType: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>
          </div>

          <div className='space-y-4'>
            <p className='text-sm font-semibold text-slate-500 uppercase tracking-wider'>
              Артикулы и бренды
            </p>

            <select
              required
              className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
              value={currentPart?.Detail || ""}
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

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {[
                { label: "ASAKASHI", key: "PartName_ASAKASHI" },
                { label: "SCT", key: "PartName_SCT" },
                { label: "YUMIKO", key: "PartName_YUMIKO" },
                { label: "OLIMP", key: "PartName_OLIMP" },
                { label: "JAPANPARTS", key: "PartName_JAPANPARTS" },
                { label: "MANN", key: "PartName_MANN" },
                { label: "KNECHT", key: "PartName_KNECHT" },
                { label: "MASUMA", key: "PartName_MASUMA" },
                { label: "BOSCH", key: "PartName_BOSCH" },
              ].map((brand) => (
                <div key={brand.key}>
                  <label className='text-[10px] ml-2 text-slate-400 font-medium'>
                    {brand.label}
                  </label>
                  <input
                    placeholder={`Артикул ${brand.label}`}
                    className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
                    value={(currentPart as any)?.[brand.key] || ""}
                    onChange={(e) =>
                      setCurrentPart({
                        ...currentPart!,
                        [brand.key]: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </div>
              ))}
              <div className='sm:col-span-2 lg:col-span-3'>
                <label className='text-[10px] ml-2 text-slate-400 font-medium'>
                  ДРУГИЕ
                </label>
                <input
                  placeholder='Артикул OTHERS'
                  className='w-full p-3 rounded-xl border bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition'
                  value={currentPart?.PartName_OTHERS || ""}
                  onChange={(e) =>
                    setCurrentPart({
                      ...currentPart!,
                      PartName_OTHERS: e.target.value.toUpperCase(),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-slate-100'>
            <button
              type='button'
              onClick={() => setIsModalOpen(false)}
              className='w-full sm:flex-1 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition'
            >
              Отмена
            </button>
            <button
              type='submit'
              className='w-full sm:flex-[2] py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition'
            >
              {currentPart?.id ? "Сохранить изменения" : "Добавить запись"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
