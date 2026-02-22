import { Plus, Search } from "lucide-react";
import type { ControlsType } from "./Types";

const ControlsWindow = ({
  brands,
  searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  setCurrentPart,
  setIsModalOpen,
}: ControlsType) => {
  return (
    <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center'>
      <div className='relative flex-1'>
        <Search
          className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
          size={18}
        />
        <input
          type='text'
          placeholder='Поиск по модели...'
          className='w-full rounded-xl border-none bg-white px-10 py-3 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <select
        className='rounded-xl border-none bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none min-w-[200px]'
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value=''>Все</option>
        {brands.map((b: any) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setCurrentPart({
            id: "",
            Brand: "",
            Model: "",
            StartDateCar: "",
            EndDateCar: "",
            EngineCapacity: "",
            EnginneType: "",
            EngineArticle: "",
            Detail: "",
            PartName_ASAKASHI: "",
            PartName_YUMIKO: "",
            PartName_SCT: "",
            PartName_OLIMP: "",
            PartName_JAPANPARTS: "",
            PartName_MANN: "",
            PartName_KNECHT: "",
            PartName_MASUMA: "",
            PartName_BOSCH: "",
            PartName_OTHERS: "",
          });
          setIsModalOpen(true);
        }}
        className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition'
      >
        <Plus size={20} /> Добавить
      </button>
    </div>
  );
};

export default ControlsWindow;
