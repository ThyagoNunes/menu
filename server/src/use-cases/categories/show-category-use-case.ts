import { CategoriesRepository } from "../../repositories/categories-repository";

export interface ShowCategoryUseCaseId {
  id: string,
}

export class ShowCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async show({id}: ShowCategoryUseCaseId) {
    const categoryShow = await this.categoriesRepository.show({id});

    return categoryShow
  }
}
