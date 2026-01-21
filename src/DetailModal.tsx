import { X, Settings, Hash } from "lucide-react";
import type { Part } from "./Types";
import { SiBmw } from "react-icons/si";

interface DetailModalProps {
  part: Part | null;
  onClose: () => void;
}

const DetailModal = ({ part, onClose }: DetailModalProps) => {
  if (!part) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'>
      <div className='bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden'>
        <div className='flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-blue-600 rounded-lg text-white'>
              <SiBmw size={30} className='text-slate-950' />
            </div>
            <h2 className='text-xl font-bold text-slate-800'>
              Детальная информация
            </h2>
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-slate-200 rounded-full transition-colors'
          >
            <X size={20} className='text-slate-500' />
          </button>
        </div>

        <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <h3 className='flex items-center gap-2 font-semibold text-slate-900 border-b pb-2'>
              <Settings size={18} className='text-blue-500' /> Автомобиль
            </h3>
            <div className='space-y-2'>
              <p className='text-sm text-slate-500'>
                Марка:{" "}
                <span className='text-slate-900 font-medium'>{part.Brand}</span>
              </p>
              <p className='text-sm text-slate-500'>
                Модель:{" "}
                <span className='text-slate-900 font-medium'>{part.Model}</span>
              </p>
              <p className='text-sm text-slate-500'>
                Объем:{" "}
                <span className='text-slate-900 font-medium'>
                  {part.EngineCapacity}
                </span>
              </p>
              <p className='text-sm text-slate-500'>
                Период:{" "}
                <span className='text-slate-900 font-medium'>
                  {part.StartDateCar} — {part.EndDateCar}
                </span>
              </p>
              <p className='text-sm text-slate-500'>
                Деталь:{" "}
                <span className='text-blue-600 font-bold'>{part.Detail}</span>
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='flex items-center gap-2 font-semibold text-slate-900 border-b pb-2'>
              <Hash size={18} className='text-blue-500' /> Аналоги / Коды
            </h3>
            <div className='grid grid-cols-1 gap-2'>
              {[
                { label: "ASAKASHI", value: part.PartName_ASAKASHI },
                { label: "SCT", value: part.PartName_SCT },
                { label: "YUMIKO", value: part.PartName_YUMIKO },
                { label: "OLIMP", value: part.PartName_OLIMP },
                { label: "JAPANPARTS", value: part.PartName_JAPANPARTS },
                { label: "MANN", value: part.PartName_MANN },
                { label: "KNECHT", value: part.PartName_KNECHT },
                { label: "MASUMA", value: part.PartName_MASUMA },
                { label: "BOSCH", value: part.PartName_BOSCH },
                { label: "OTHERS", value: part.PartName_OTHERS },
              ].map((item) => (
                <div
                  key={item.label}
                  className='flex justify-between items-center p-2 bg-slate-50 rounded-md'
                >
                  <span className='text-xs font-bold text-slate-500 uppercase'>
                    {item.label}
                  </span>
                  <span className='text-sm font-mono font-bold text-blue-700'>
                    {item.value || "—"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end'>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors shadow-lg'
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
