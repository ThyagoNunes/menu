import { ShowBedUseCase } from './show-bed-use-case';

const showBedsSpy = jest.fn();

const showBed = new ShowBedUseCase(
  {show: showBedsSpy}
)

describe('Show bed', () => {
  it('Should be able to show the bed', async () => {
    await expect(showBed.show({
      id: 'teste123456',
      /* patientId: 'teste123456' */
    })).resolves.not.toThrow();
    expect(showBedsSpy).toHaveBeenCalled();
  })

  it('Should be not able to show the bed without ID', async () => {
    await expect(showBed.show({
      id: '',
    })).rejects.toThrow();
  })  
})