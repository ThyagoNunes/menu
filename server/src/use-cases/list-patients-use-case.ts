import { PatientsRepository } from "../repositories/patients-repository";

export class ListPatientsUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async index(){
    const patientsInfo = await this.patientsRepository.index()
 
    return patientsInfo
  }
}