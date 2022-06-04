import { CreateBedUseCase } from './create-bed-use-case';

const createBedSpy = jest.fn();

const createBed = new CreateBedUseCase(
  {create: createBedSpy}
)

describe('Create bed', () => {
  it('Should be able to Create bed', async () => {
    await expect(createBed.execute({
      name: 'teste123456', 
    })).resolves.not.toThrow()
    expect(createBedSpy).toHaveBeenCalled();
  })

  it('Should be not able to Create bed without id', async() => {
    await expect(createBed.execute({
      name: '', 
    })).rejects.toThrow();
  })
})