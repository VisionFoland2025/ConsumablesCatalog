import { FileSpreadsheet, Save, FolderOpen } from "lucide-react";
import type { NavigationType } from "./Types";

const Navigation = ({
  handleOpenFile,
  saveToFile,
  fileHandle,
}: NavigationType) => {
  return (
    <nav className='sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-blue-600 p-1.5 sm:p-2 rounded-lg text-white'>
            <FileSpreadsheet size={20} className='sm:w-6 sm:h-6' />
          </div>
          <h1 className='text-lg sm:text-xl font-bold tracking-tight'>
            Auto<span className='hidden xs:inline'>Parts</span> CMS{" "}
            <span className='text-blue-600'>26</span>
          </h1>
        </div>

        <div className='flex items-center gap-2 sm:gap-3'>
          <button
            onClick={handleOpenFile}
            className='flex items-center gap-2 rounded-full px-3 py-2 sm:px-4 text-sm font-medium bg-slate-100 hover:bg-slate-200 transition active:scale-95'
            title='Открыть Excel'
          >
            <FolderOpen size={18} />
            <span className='hidden md:inline'>Открыть Excel</span>
          </button>

          <button
            onClick={saveToFile}
            disabled={!fileHandle}
            className='flex items-center gap-2 rounded-full px-3 py-2 sm:px-4 text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition shadow-lg shadow-green-200 active:scale-95'
            title='Сохранить файл'
          >
            <Save size={18} />
            <span className='hidden md:inline'>Сохранить</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
