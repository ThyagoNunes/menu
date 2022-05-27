import { CategoriesRepository } from "../../repositories/categories-repository";

export interface UpdateCategoryUseCaseRequest { 
  id: string, 
  name: string, 
}

export class UpdateCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async update({id, name}: UpdateCategoryUseCaseRequest) {
    const categoryUpdate = await this.categoriesRepository.update({id, name})

    return categoryUpdate;
  }
}