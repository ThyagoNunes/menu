export interface PatientsRepositoryIndex { 
  
}

export interface PatientsRepositoryShowData {
  id: string,
}

export interface PatientsRepositoryCreateDate {
  name: string,
  order: string, 
  nameBed: string,
}

export interface PatientsRepositoryUpdateData {
  id: string,
  name: string, 
  order: string, 
  nameBed: string,
}

export interface PatientsRepositoryDeleteData { 
  id: string,
}

export interface PatientsRepository {
  index: () => Promise<void>;
  show: (data: PatientsRepositoryShowData) => Promise<void>;
  create: (data: PatientsRepositoryCreateDate) => Promise<void> ;
  update: (data: PatientsRepositoryUpdateData) => Promise<void>;
  delete: (data: PatientsRepositoryDeleteData) => Promise<void>;
}