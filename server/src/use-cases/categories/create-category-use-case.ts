import { CategoriesRepository } from "../../repositories/categories-repository";
export interface CreateCategoryUseCaseRequest {
  name: string, 
}

export class CreateCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async execute({name}: CreateCategoryUseCaseRequest) {
    const categoryCreate = await this.categoriesRepository.create({name})

    return categoryCreate;
  }
}