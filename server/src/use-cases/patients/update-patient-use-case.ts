import { PatientsRepository } from "../../repositories/patients-repository";

export interface UpdatePatientUseCaseUpdate {
  id: string, 
  name: string, 
}

export class UpdatePatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async update({id, name}: UpdatePatientUseCaseUpdate) {

    if(!id){
      throw new Error('Id is required')
    }

    if(!name){
      throw new Error('Name is required')
    }

    const patient = await this.patientsRepository.update({
      id,
      name, 
    })

    return patient;
  }
}


