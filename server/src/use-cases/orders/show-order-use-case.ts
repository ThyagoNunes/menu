import { OrdersRepository } from "../../repositories/orders-repository";

export interface ShowOrderUseCaseId{
  id: string, 
}

export class ShowOrderUseCase {
  constructor(
    private ordersRepository: OrdersRepository
  ){}

  async show({id}: ShowOrderUseCaseId){
    const orderShow = await this.ordersRepository.show({id})

    return orderShow;
  }
}