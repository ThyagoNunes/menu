import { BedsRepository } from "../../repositories/beds-repository";

export class ListBedsUseCase {
  constructor(
    private bedsRepository: BedsRepository
  ){}

  async index() {
    const beds = await this.bedsRepository.index();

    return beds;
  }
}