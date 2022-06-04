import { VacantBedsUseCase } from './vacant-beds-use-case';

const vacantBedsSpy = jest.fn();

const vacantBeds = new VacantBedsUseCase(
  {vacant: vacantBedsSpy}
)

describe('Show vacant beds', () => {
  it('Should be able to Show Vacant beds', () => {
    expect(vacantBeds.vacant())
    expect(vacantBedsSpy).toHaveBeenCalled();
  })
})