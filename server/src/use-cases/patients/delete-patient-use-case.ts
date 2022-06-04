import { PatientsRepository } from "../../repositories/patients-repository";

interface DeletePatientUseCaseRequest { 
  id: string, 
}

export class DeletePatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async delete({id}: DeletePatientUseCaseRequest) {

    if (!id) {
      throw new Error('Id is required');
    }

    await this.patientsRepository.delete({id});
  }
}