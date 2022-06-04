import { DeleteBedUseCase } from './delete-bed-use-case';

const deleteBedSpy = jest.fn();

const deleteBed = new DeleteBedUseCase(
  {delete: deleteBedSpy}
)

describe('Delete Bed', () => {
  it('Should be able to Delete bed', async () => {
    await expect(deleteBed.delete({
      id: 'teste123456',
    })).resolves.not.toThrow();
    expect(deleteBedSpy).toHaveBeenCalled();
  })

  it('Should be not able to delete bed without id', async () => {
    await expect(deleteBed.delete({
      id: '', 
    })).rejects.toThrow();
  })
})