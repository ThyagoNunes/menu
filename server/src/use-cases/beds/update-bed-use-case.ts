import { BedsRepository } from "../../repositories/beds-repository";

export interface UpdateBedUseCaseRequest {
  id: string,
  name: string,
  patientId?: string | null,
}

export class UpdateBedUseCase { 
  constructor(
    private bedsRepository: BedsRepository
  ){}

  async update({id, name, patientId}: UpdateBedUseCaseRequest) { 

    if(!id){
      throw new Error('ID is required');
    }
    if(!name) {
      throw new Error('NAME is required');
    }

    const bedUpdate = await this.bedsRepository.update({id, name, patientId});

    return bedUpdate;
  }
}