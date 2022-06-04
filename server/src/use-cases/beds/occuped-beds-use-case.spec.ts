import { OccupedBedsUseCase } from './occuped-beds-use-case'

const occupedBedsSpy = jest.fn();

const occupedBeds = new OccupedBedsUseCase(
  {occuped: occupedBedsSpy}
)

describe('show Occuped beds', () => {
  it('Should be able to List beds status Occuped', () => {
    expect(occupedBeds.occuped());
    expect(occupedBedsSpy).toHaveBeenCalled();
  })
})