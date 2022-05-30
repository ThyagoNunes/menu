import { PatientsRepository } from "../../repositories/patients-repository";

interface UpdatePatientUseCaseUpdate {
  id?: string;
  name: string;
  order: string;
  category?: string;
}

export class UpdatePatientUseCase {
  constructor(private patientsRepository: PatientsRepository) {}

  async update({ id, name, order, category }: UpdatePatientUseCaseUpdate) {
    const patient = await this.patientsRepository.update({
      id,
      name,
      order,
      category,
    });

    return patient;
  }
}
