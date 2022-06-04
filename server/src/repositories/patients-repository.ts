import { Patient } from "@prisma/client";

export interface PatientsRepositoryShowData {
  id: string,
}

export interface PatientsRepositoryCreateDate {
  name: string,
}

export interface PatientsRepositoryUpdateData {
  id: string | undefined,
  name: string, 
}

export interface PatientsRepositoryDeleteData { 
  id: string,
}

export interface PatientsRepository {
  index: () => Promise<Patient[] | string >;
  show: (data: PatientsRepositoryShowData) => Promise<Patient | null>;
  create: (data: PatientsRepositoryCreateDate) => Promise<Patient | null> ;
  update: (data: PatientsRepositoryUpdateData) => Promise<Patient | null>;
  delete: (data: PatientsRepositoryDeleteData) => Promise<Patient | string>;
}