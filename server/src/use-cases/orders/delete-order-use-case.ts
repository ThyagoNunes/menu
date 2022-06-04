import { OrdersRepository } from "../../repositories/orders-repository";

export interface DeleteOrderUseCaseDelete {
  id: string,
}

export class DeleteOrderUseCase {
  constructor(
    private ordersRepository: OrdersRepository
  ) {}

  async delete({id}: DeleteOrderUseCaseDelete) {

    if(!id) {
      throw new Error('ID is required')
    }
    
    const order = await this.ordersRepository.delete({
      id,
    });

    return order;
  }
}