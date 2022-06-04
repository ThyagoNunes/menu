import { Bed } from "@prisma/client"

export interface BedsRepositoryShowData { 
  id: string, 
  patientId?: string,
}

export interface BedsRepositoryCreateData { 
  name: string, 
  patientId?: string
}

export interface BedsRepositoryUpdateData {
  id: string, 
  name: string, 
  patientId?: string | null,
}

export interface BedsRepositoryDeleteData { 
  id: string,
}

export interface BedsRepository {
  index: () => Promise<Bed[] | null> 
  occuped: () => Promise<Bed[] | null> 
  vacant: () => Promise<Bed[] | null>
  show: (data: BedsRepositoryShowData) => Promise<Bed | null>
  create: (data: BedsRepositoryCreateData) => Promise<Bed | null>
  update: (data: BedsRepositoryUpdateData) => Promise<Bed | null>
  delete: (data: BedsRepositoryDeleteData) => Promise<Bed | string>
}