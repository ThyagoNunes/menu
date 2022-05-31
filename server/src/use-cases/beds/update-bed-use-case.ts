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
    const bedUpdate = await this.bedsRepository.update({id, name, patientId});

    return bedUpdate;
  }
}