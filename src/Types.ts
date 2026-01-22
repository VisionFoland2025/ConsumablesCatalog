export interface Part {
  id: string;
  Brand: string;
  Model: string;
  StartDateCar: string;
  EndDateCar: string;
  EngineCapacity: string;
  EnginneType: string;
  EngineArticle: string;
  Detail: string;
  PartName_ASAKASHI: string;
  PartName_YUMIKO: string;
  PartName_SCT: string;
  PartName_OLIMP: string;
  PartName_JAPANPARTS: string;
  PartName_MANN: string;
  PartName_KNECHT: string;
  PartName_MASUMA: string;
  PartName_BOSCH: string;
  PartName_OTHERS: string;
}

export interface ModalType {
  currentPart: Part | null;
  setIsModalOpen: (isOpen: boolean) => void;
  setCurrentPart: (part: Part | null) => void;
  handleSavePart: (e: React.FormEvent) => void;
}

export interface ControlsType {
  brands: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  setCurrentPart: (part: Part | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface NavigationType {
  handleOpenFile: () => void;
  saveToFile: () => void;
  fileHandle: any;
}

export interface SaveToFileType {
  fileHandle: FileSystemFileHandle | null;
  parts: any[];
}

export interface HandleOpenFileType {
  setFileHandle: React.Dispatch<
    React.SetStateAction<FileSystemFileHandle | null>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setParts: React.Dispatch<React.SetStateAction<any[]>>;
}
