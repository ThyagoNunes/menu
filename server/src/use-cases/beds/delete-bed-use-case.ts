import { BedsRepository } from "../../repositories/beds-repository";

export interface DeleteBedUseCaseRequest {
  id: string,
}

export class DeleteBedUseCase {
  constructor(
    private bedsRepository: BedsRepository,
  ){}

  async delete({id}: DeleteBedUseCaseRequest) {
    if(!id) {
      throw new Error('ID is required');
    }
    
    await this.bedsRepository.delete({id});

    return 'Deleted';
  }
}