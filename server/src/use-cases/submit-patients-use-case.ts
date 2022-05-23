import { PatientsRepository } from "../repositories/patients-repository"

export interface SubmitPatientsUseCaseRequest {
  name: string, 
  order: string, 
  nameBed: string,
}

export class SubmitPatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {}

  async execute({name, order, nameBed}: SubmitPatientsUseCaseRequest) {
    const patients = await this.patientsRepository.create({
      name, 
      order, 
      nameBed,
    })

    return patients
  }
}