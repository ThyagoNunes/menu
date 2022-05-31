import { Bed } from "@prisma/client"

export interface BedsRepositoryShowData { 
  id: string, 
}

export interface BedsRepositoryCreateData { 
  patientId?: string
  name: string, 
}

export interface BedsRepositoryUpdateData {
  id: string, 
  name: string, 
  patientId?: string | null,
}

export interface BedsRepositoryDeleteData { 
  id: string,
}

export interface BedsRepositoryFindData {
  patientId: string,
}

export interface BedsRepository {
  index: () => Promise<Bed[] | null> 
  show: (data: BedsRepositoryShowData) => Promise<Bed | null>
  create: (data: BedsRepositoryCreateData) => Promise<Bed | null>
  update: (data: BedsRepositoryUpdateData) => Promise<Bed | null>
  delete: (data: BedsRepositoryDeleteData) => Promise<Bed | string>
  /* find: (data: BedsRepositoryFindData) => Promise<Bed | null> */
}