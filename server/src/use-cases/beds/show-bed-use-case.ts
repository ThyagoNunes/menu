import { BedsRepository } from "../../repositories/beds-repository";

export interface ShowBedUseCaseId {
  id: string, 
}

export class ShowBedUseCase { 
  constructor(
    private bedsRepository: BedsRepository,
  ){}

  async show({id}: ShowBedUseCaseId) {
    const bedShow = await this.bedsRepository.show({id})

    return bedShow;
  }
}