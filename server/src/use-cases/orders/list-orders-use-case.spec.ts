import { ListOrdersUseCase } from './list-orders-use-case'

const listOrdersSpy = jest.fn();

const listOrders = new ListOrdersUseCase(
  {index: listOrdersSpy}
)

describe('List orders', () => {
  it('Should be able to show ALL orders', () => {
    expect(listOrders.index(

    ))
    expect(listOrdersSpy).toHaveBeenCalled();
  })
})
