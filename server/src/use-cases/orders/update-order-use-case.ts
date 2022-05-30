import { OrdersRepository } from "../../repositories/orders-repository";

export interface UpdateOrderUseCaseRequest {
  id: string, 
  name: string, 
  patientId: string, 
  categoryId: string, 
}

export class UpdateOrderUseCase {
  constructor(
    private ordersRepository: OrdersRepository
  ){}

  async update({id, name, patientId, categoryId}: UpdateOrderUseCaseRequest){
    const orderUpdate = await this.ordersRepository.update({
      id, 
      name, 
      patientId, 
      categoryId, 
    })
    return orderUpdate
  }
}