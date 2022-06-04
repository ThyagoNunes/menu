import { UpdateOrderUseCase } from './update-order-use-case'

const updateOrderSpy = jest.fn();

const updateOrder = new UpdateOrderUseCase(
  { update: updateOrderSpy }
)

describe('Update order', () => {
  it('Should be able to Update order', async () => {
    await expect(updateOrder.update({
      id: 'teste123456', 
      name: 'Cookie Red Velvet com Nutella',
      categoryId: 'Comida', 
      patientId: 'teste123456'
    })).resolves.not.toThrow();

    expect(updateOrderSpy).toHaveBeenCalled();
  })
  
  it('Should be not able Update order Without ID', async () => {
    await expect(updateOrder.update({
      id: '', 
      name: 'Cookie Red Velvet com Nutella',
      categoryId: 'Comida', 
      patientId: 'teste123456'
    })).rejects.toThrow();
  })

  it('Should be not able to update order without NAME', async () => {
    await expect(updateOrder.update({
      id: 'teste123456',
      name: '',
      categoryId: 'Comida', 
      patientId: 'teste123456'
    })).rejects.toThrow();
  })

  it('Should be not able to update order without ID CATEGORY', async () => {
    await expect(updateOrder.update({
      id: 'teste123456',
      name: 'Cookie Red Velvet com Nutella',
      categoryId: '', 
      patientId: 'teste123456'
    })).rejects.toThrow();
  })

  it('Should be not able to update order without ID PATIENT', async () => {
    await expect(updateOrder.update({
      id: 'teste123456',
      name: 'Cookie Red Velvet com Nutella', 
      categoryId: 'teste123456', 
      patientId: '',
    })).rejects.toThrow();
  })
})