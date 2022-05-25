import { PatientsRepository } from "../repositories/patients-repository"

export interface CreatePatientsUseCaseRequest {
  name: string, 
  order: string, 
  nameBed: string,
}

export class CreatePatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {}

  async execute({ name, order, nameBed}: CreatePatientsUseCaseRequest) {
    const patients = await this.patientsRepository.create({
      name, 
      order, 
      nameBed,
    })

    return patients 
  }
}