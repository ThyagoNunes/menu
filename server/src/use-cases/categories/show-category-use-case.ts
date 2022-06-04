import { CategoriesRepository } from "../../repositories/categories-repository";

export interface ShowCategoryUseCaseId {
  id: string,
}

export class ShowCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async show({id}: ShowCategoryUseCaseId) {
    if(!id){
      throw new Error('ID is required');
    }

    const categoryShow = await this.categoriesRepository.show({id});

    return categoryShow
  }
}
