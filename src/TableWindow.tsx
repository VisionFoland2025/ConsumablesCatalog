import { Edit2, Trash2 } from "lucide-react";
import type { Part } from "./Types";
import { SiBmw } from "react-icons/si";

const TableWindow = ({
  parts,
  filteredParts,
  setCurrentPart,
  setIsModalOpen,
  deletePart,
  onRowClick,
}: any) => {
  return (
    <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl'>
      <table className='w-full text-left border-collapse'>
        <thead className='bg-slate-50 border-b border-slate-200'>
          <tr>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              Автомобиль
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              Деталь
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              ASAKASHI
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              SCT
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              YUMIKO
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              OLIMP
            </th>
            <th className='px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider'>
              JAPANPARTS
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
                  {part.Model} • {part.EngineCapacity} • {part.EnginneType} •{" "}
                  {part.EngineArticle}
                </div>
                <div className='text-sm text-slate-500'>
                  {part.StartDateCar} - {part.EndDateCar}
                </div>
              </td>
              <td className='px-6 py-4 text-slate-700 font-medium'>
                {part.Detail}
              </td>
              <td className='px-6 py-4'>
                <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'>
                  {part.PartName_ASAKASHI}
                </span>
              </td>
              <td className='px-6 py-4'>
                <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'>
                  {part.PartName_SCT}
                </span>
              </td>
              <td className='px-6 py-4'>
                <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'>
                  {part.PartName_YUMIKO}
                </span>
              </td>
              <td className='px-6 py-4'>
                <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'>
                  {part.PartName_OLIMP}
                </span>
              </td>
              <td className='px-6 py-4'>
                <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase'>
                  {part.PartName_JAPANPARTS}
                </span>
              </td>

              <td
                className='px-6 py-4 text-right'
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={(e) => e.stopPropagation()}
              >
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
      {parts.length === 0 && (
        <div className='py-20 text-center text-slate-400'>
          <SiBmw size={50} className='text-slate-400 mx-auto mb-4 ' />
          <p>Нажмите "Открыть Excel", чтобы начать работу</p>
        </div>
      )}
    </div>
  );
};

export default TableWindow;
