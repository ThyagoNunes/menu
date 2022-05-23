import { PatientsRepository } from "../repositories/patients-repository"

export interface SubmitPatientsUseCaseRequest {
  id?: string,
  name: string, 
  order: string, 
  nameBed: string,
}

export class SubmitPatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {}

  async execute({id, name, order, nameBed}: SubmitPatientsUseCaseRequest) {
    const patients = await this.patientsRepository.create({
      id,
      name, 
      order, 
      nameBed,
    })

    return patients
  }

  async index() {
    const patients = await this.patientsRepository.index()
    return patients;
  }
}