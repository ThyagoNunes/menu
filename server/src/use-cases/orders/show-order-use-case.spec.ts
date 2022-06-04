import { ShowOrderUseCase } from './show-order-use-case'

const showOrderSpy = jest.fn();

const showOrder = new ShowOrderUseCase(
  {show: showOrderSpy}
)

describe('Show order', () => {
  it('Should be able to show order', async () => {
    await expect(showOrder.show({
      id: 'teste123456', 
    })).resolves.not.toThrow();
  
    expect(showOrderSpy).toHaveBeenCalled();
  })

  it('Should be not able to show order withou ID ', async () => {
    await expect(showOrder.show({
      id: '', 
    })).rejects.toThrow();
  })
})