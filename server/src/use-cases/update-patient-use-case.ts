import { PatientsRepository } from "../repositories/patients-repository";

interface UpdatePatientUseCaseUpdate {
  id?: string,
  name: string, 
  order: string, 
  nameBed: string,
}

export class UpdatePatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async update({id,  name, order, nameBed}: UpdatePatientUseCaseUpdate) {
    const patient = await this.patientsRepository.update({
      id,
      name, 
      order,
      nameBed,
    })

    console.log(patient);
    return patient;
  }
}