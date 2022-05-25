import { PatientsRepository } from '../repositories/patients-repository'

interface ShowPatientUseCaseId {
  id: string,
}

export class ShowPatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async show({id}: ShowPatientUseCaseId) {
    const patientInfo = await this.patientsRepository.show({id});

    return patientInfo;
  }
}