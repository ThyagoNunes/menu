import { CategoriesRepository } from "../../repositories/categories-repository";

export interface DeleteCategoryUseCaseRequest { 
  id: string, 
}

export class DeleteCategoryUseCase {
  constructor(
    private categoriesRepository: CategoriesRepository
  ){}

  async delete({id}: DeleteCategoryUseCaseRequest) {
    if(!id) {
      throw new Error('ID is required');
    }

    await this.categoriesRepository.delete({id});

    return 'Deleted';
  }
}