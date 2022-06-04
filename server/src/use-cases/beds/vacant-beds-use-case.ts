import { BedsRepository } from "../../repositories/beds-repository";


export class VacantBedsUseCase {
  constructor(
    private bedsRepository: BedsRepository
  ) {}

  async vacant() {

    const bedsVacant = await this.bedsRepository.vacant()

    return bedsVacant
  }
}