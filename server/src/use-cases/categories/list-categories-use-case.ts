import { CategoriesRepository } from "../../repositories/categories-repository";

export class ListCategoriesUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async index() {
    const categories = await this.categoriesRepository.index();

    return categories;
  }
}