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

  async execute({name, patientId, categoryId}: CreateOrderUseCaseRequest) {

    if(!name){
      throw new Error('Name is required');
    }

    if(!patientId){
      throw new Error('ID patient is required');
    }

    if(!categoryId){
      throw new Error('ID category is required');
    }

    const orderCreate = await this.ordersRepository.create({
      name, 
      patientId,
      categoryId,
    })
    return orderCreate;
  }
}