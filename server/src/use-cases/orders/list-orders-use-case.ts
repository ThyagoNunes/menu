import { OrdersRepository } from "../../repositories/orders-repository";


export class ListOrdersUseCase {
  constructor(
    private ordersRepository: OrdersRepository
  ){}

  async index() {
    const orders = await this.ordersRepository.index();

    return orders;
  }
}