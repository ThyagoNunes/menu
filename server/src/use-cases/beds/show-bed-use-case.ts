import { BedsRepository } from "../../repositories/beds-repository";

export interface ShowBedUseCaseId {
  id: string, 
  patientId?: string,
}

export class ShowBedUseCase { 
  constructor(
    private bedsRepository: BedsRepository,
  ){}

  async show({id, patientId}: ShowBedUseCaseId) {

    if(!id){
      throw new Error('ID is required')
    }

    const bedShow = await this.bedsRepository.show({id, patientId})

    return bedShow;
  }
}