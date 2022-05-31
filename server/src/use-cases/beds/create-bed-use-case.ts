import { BedsRepository } from "../../repositories/beds-repository";

export interface CreateBedUseCaseRequest {
  patientId?: string,
  name: string, 
}

export class CreateBedUseCase {
  constructor( 
    private bedsRepository: BedsRepository
  ) {}

  async execute({patientId, name}: CreateBedUseCaseRequest) {
    const bedCreate = await this.bedsRepository.create({patientId, name})

    return bedCreate;
  }
}