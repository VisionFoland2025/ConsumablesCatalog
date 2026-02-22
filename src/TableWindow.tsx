import { Edit2, Trash2 } from "lucide-react";
import type { Part } from "./Types";
import { SiBmw } from "react-icons/si";

const TableWindow = ({
  filteredParts,
  setCurrentPart,
  setIsModalOpen,
  deletePart,
  onRowClick,
}: any) => {
  return (
    <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl'>
      <div className='hidden md:block overflow-x-auto'>
        <table className='w-full text-left border-collapse'>
          <thead className='bg-slate-50 border-b border-slate-200'>
            <tr>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
                Автомобиль
              </th>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
                Деталь
              </th>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-center'>
                Бренды (A, S, Y, O, J)
              </th>
              <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right'>
                Действия
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100'>
            {filteredParts.map((part: Part) => (
              <tr
                key={part.id}
                onDoubleClick={() => onRowClick(part)}
                className='hover:bg-slate-50 transition-colors group'
              >
                <td className='px-6 py-4'>
                  <div className='font-bold text-slate-900'>{part.Brand}</div>
                  <div className='text-sm text-slate-700'>
                    {part.Model} • {part.EngineCapacity}
                  </div>
                  <div className='text-xs text-slate-500'>
                    {part.StartDateCar} - {part.EndDateCar}
                  </div>
                </td>
                <td className='px-6 py-4 text-slate-700 font-medium'>
                  {part.Detail}
                </td>
                <td className='px-6 py-4'>
                  <div className='flex flex-wrap gap-1 justify-center'>
                    {[
                      part.PartName_ASAKASHI,
                      part.PartName_SCT,
                      part.PartName_YUMIKO,
                      part.PartName_OLIMP,
                      part.PartName_JAPANPARTS,
                    ].map(
                      (name, i) =>
                        name && (
                          <span
                            key={i}
                            className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'
                          >
                            {name}
                          </span>
                        ),
                    )}
                  </div>
                </td>
                <td className='px-6 py-4 text-right'>
                  <div className='flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <button
                      onClick={() => {
                        setCurrentPart(part);
                        setIsModalOpen(true);
                      }}
                      className='p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg'
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => deletePart(part.id)}
                      className='p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg'
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* МОБИЛЬНЫЙ ВИД (карточки, скрыты на десктопе) */}
      <div className='md:hidden divide-y divide-slate-100'>
        {filteredParts.map((part: Part) => (
          <div
            key={part.id}
            onClick={() => onRowClick(part)}
            className='p-4 active:bg-slate-50'
          >
            <div className='flex justify-between items-start mb-2'>
              <div>
                <div className='font-bold text-lg text-slate-900'>
                  {part.Brand}
                </div>
                <div className='text-sm text-slate-600'>
                  {part.Model} | {part.EngineCapacity}
                </div>
              </div>
              <div className='flex gap-1'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPart(part);
                    setIsModalOpen(true);
                  }}
                  className='p-2 text-blue-600 bg-blue-50 rounded-md'
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePart(part.id);
                  }}
                  className='p-2 text-red-600 bg-red-50 rounded-md'
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className='mb-3'>
              <span className='text-xs font-semibold uppercase text-slate-400'>
                Деталь:
              </span>
              <div className='text-slate-800 font-medium'>{part.Detail}</div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              {/* Компактный вывод кросс-номеров */}
              {[
                ["ASA", part.PartName_ASAKASHI],
                ["SCT", part.PartName_SCT],
                ["YUM", part.PartName_YUMIKO],
                ["OLI", part.PartName_OLIMP],
                ["JAP", part.PartName_JAPANPARTS],
              ].map(
                ([label, value]) =>
                  value && (
                    <div
                      key={label}
                      className='bg-slate-50 p-2 rounded border border-slate-100'
                    >
                      <div className='text-[10px] text-slate-400 font-bold uppercase'>
                        {label}
                      </div>
                      <div className='text-xs font-bold text-blue-700 truncate'>
                        {value}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Состояние пустого списка */}
      {filteredParts.length === 0 && (
        <div className='py-20 text-center text-slate-400'>
          <SiBmw size={50} className='text-slate-400 mx-auto mb-4' />
          <p>Нет данных для отображения</p>
        </div>
      )}
    </div>
  );
};

export default TableWindow;
