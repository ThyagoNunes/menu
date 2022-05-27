import { CategoriesRepository } from "../../repositories/categories-repository";

export interface UpdateCategoryUseCaseUpdated { 
  id: string, 
  name: string, 
}

export class UpdateCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async update({id, name}: UpdateCategoryUseCaseUpdated) {
    const categoryUpdate = await this.categoriesRepository.update({id, name})

    return categoryUpdate;
  }
}