import { BedsRepository } from "../../repositories/beds-repository";


export class OccupedBedsUseCase {
  constructor(
    private bedsRepository: BedsRepository
  ) {}

  async occuped() {

    const bedsOccuped = await this.bedsRepository.occuped()

    return bedsOccuped
  }
}