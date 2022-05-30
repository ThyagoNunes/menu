import { OrdersRepository } from "../../repositories/orders-repository";

export interface CreateOrderUseCaseRequest{
  name: string, 
  patientId: string, 
  categoryId: string, 
}

export class CreateOrderUseCase { 
  constructor(
    private ordersRepository: OrdersRepository
  ){}

  async create({name, patientId, categoryId}: CreateOrderUseCaseRequest) {
    const orderCreate = await this.ordersRepository.create({
      name, 
      patientId,
      categoryId,
    })
    return orderCreate;
  }
}