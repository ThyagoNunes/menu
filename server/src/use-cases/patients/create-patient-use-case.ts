import { PatientsRepository } from "../../repositories/patients-repository";

export interface CreatePatientUseCaseRequest {
  name: string, 
}

export class CreatePatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ) {
  }

  async execute({ name }: CreatePatientUseCaseRequest) {
    

    if (!name) {
      throw new Error('Name is required');
    }

    name = name.toUpperCase();
    
    const patients = await this.patientsRepository.create({
      name,
    })
    
    return patients 
  }
}