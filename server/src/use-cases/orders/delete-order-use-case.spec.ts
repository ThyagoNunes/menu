import { DeleteOrderUseCase } from './delete-order-use-case'

const deleteOrderSpy = jest.fn();

const deleteOrder = new DeleteOrderUseCase(
  {delete: deleteOrderSpy}
)

describe('Delete Order', () => {
  it('Should be able to Delete order', async () => {
    await expect(deleteOrder.delete({
      id: 'teste123456',
    })).resolves.not.toThrow();

    expect(deleteOrderSpy).toHaveBeenCalled();
  });

  it('Should be not able to Delete order without ID', async () => {
    await expect(deleteOrder.delete({
      id: '', 
    })).rejects.toThrow();
  })
})