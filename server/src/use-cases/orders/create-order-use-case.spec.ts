import { CreateOrderUseCase } from './create-order-use-case'

const createOrderSpy = jest.fn();

const createOrder = new CreateOrderUseCase(
  {create: createOrderSpy}
)

describe('Create Order', () => {
  it('Should be able to create a order', async () => {
    await expect(createOrder.execute({
      name: 'pizza domino`s',
      patientId: 'testando123456',
      categoryId: 'comida',  
    })).resolves.not.toThrow();

    expect(createOrderSpy).toHaveBeenCalled();
  });

  it('Should be not able to create order without name', async () => {
    await expect(createOrder.execute({
      name: '', 
      patientId: 'testando123456',
      categoryId: 'comida',  
    })).rejects.toThrow();
  });

  it('Should not be able to create order without ID PATIENT', async () => {
    await expect(createOrder.execute({
      name: 'pizza domino`s',
      patientId: '',
      categoryId: 'comida', 
    })).rejects.toThrow();
  })

  it('Should not be able to Create order without ID CATEGORY', async () => {
    await expect(createOrder.execute({
      name: 'pizza domino`s',
      patientId: 'teste123456',
      categoryId: '', 
    })).rejects.toThrow();
  })

})