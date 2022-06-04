import { ListBedsUseCase } from './list-beds-use-case'

const listBedsSpy = jest.fn();

const listBeds = new ListBedsUseCase(
  { index: listBedsSpy }
)

describe('List Beds', () => {
  it('Should be able to list beds', () => {
    expect(listBeds.index(
      
    ))
    expect(listBedsSpy).toHaveBeenCalled();
  })
});