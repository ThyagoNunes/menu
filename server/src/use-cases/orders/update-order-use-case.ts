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

    if(!id){
      throw new Error('ID is required')
    }
    if(!name){
      throw new Error('NAME is required')
    }
    if(!patientId){
      throw new Error('ID PATIENT is required')
    }
    if(!categoryId){
      throw new Error('ID CATEGORY is required')
    }

    const orderUpdate = await this.ordersRepository.update({
      id, 
      name, 
      patientId, 
      categoryId, 
    })
    return orderUpdate
  }
}