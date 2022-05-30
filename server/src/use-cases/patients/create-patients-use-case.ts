import { PatientsRepository } from "../../repositories/patients-repository";

export interface CreatePatientsUseCaseRequest {
  name: string, 
}

export class CreatePatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {
  }

  async execute({ name}: CreatePatientsUseCaseRequest) {
    const patients = await this.patientsRepository.create({
      name,
    })

    return patients 
  }
}