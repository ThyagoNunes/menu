import { PatientsRepository } from "../../repositories/patients-repository";

interface UpdatePatientUseCaseUpdate {
  id?: string;
  name: string;
}

export class UpdatePatientUseCase {
  constructor(private patientsRepository: PatientsRepository) {}

  async update({ id, name }: UpdatePatientUseCaseUpdate) {
    const patient = await this.patientsRepository.update({
      id,
      name,
    });

    return patient;
  }
}
