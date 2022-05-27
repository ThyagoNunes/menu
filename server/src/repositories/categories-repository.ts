import { Category } from "@prisma/client";

export interface CategoriesRepositoryShowData {
  id: string,
}

export interface CategoriesRepositoryCreateData{
  name: string,
}

export interface CategoriesRepositoryUpdateData {
  id?: string, 
  name: string,
}

export interface CategoriesRepositoryDeleteData {
  id: string, 
}


export interface CategoriesRepository {
  index: () => Promise <Category[] | null>
  show: (data: CategoriesRepositoryShowData) => Promise<Category | null >;
  create: (data: CategoriesRepositoryCreateData) => Promise<Category | null >;
  update: (data: CategoriesRepositoryUpdateData) => Promise<Category | null >;
  delete: (data: CategoriesRepositoryDeleteData) => Promise<Category | null >;
}