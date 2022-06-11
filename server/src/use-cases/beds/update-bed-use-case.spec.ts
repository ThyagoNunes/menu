import { UpdateBedUseCase } from './update-bed-use-case';

const updateBedSpy = jest.fn();

const updateBed = new UpdateBedUseCase(
  {update: updateBedSpy}
)

describe('Update bed', () => {
  it('Should be able to Update bed', async () => {
    await expect(updateBed.update({
      id: 'teste123456', 
      name: 'a1l1',
    })).resolves.not.toThrow();
    expect(updateBedSpy).toHaveBeenCalled();
  })

  it('Should be not able to Update bed withoud ID', async () => {
    await expect(updateBed.update({
      id: '', 
      name: 'teste123456',
    })).rejects.toThrow();
  })

  it('should be not able to Update bed without NAME', async () => {
    await expect(updateBed.update({
      id: 'teste123456',
      name: '', 
    })).rejects.toThrow()
  })

})