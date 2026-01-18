import { FileSpreadsheet, Save } from "lucide-react";
import type { NavigationType } from "./Types";

const Navigation = ({
  handleOpenFile,
  saveToFile,
  fileHandle,
}: NavigationType) => {
  return (
    <nav className='sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md px-6 py-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-blue-600 p-2 rounded-lg text-white'>
            <FileSpreadsheet size={24} />
          </div>
          <h1 className='text-xl font-bold tracking-tight'>
            AutoParts CMS <span className='text-blue-600'>2026</span>
          </h1>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={handleOpenFile}
            className='flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-slate-100 hover:bg-slate-200 transition'
          >
            📂 Открыть Excel
          </button>
          <button
            onClick={saveToFile}
            disabled={!fileHandle}
            className='flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition shadow-lg shadow-green-200'
          >
            <Save size={16} /> Сохранить файл
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
