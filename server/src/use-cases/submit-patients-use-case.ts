import { PatientsRepository } from "../repositories/patients-repository"

export interface SubmitPatientsUseCaseRequest {
  name: string, 
  request: string, 
  nameBed: string,
}

export class SubmitPatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {}

  async execute({name, request, nameBed}: SubmitPatientsUseCaseRequest) {
    await this.patientsRepository.create({
      name, 
      request, 
      nameBed,
    })
  }
}