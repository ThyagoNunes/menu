import { ListPatientsUseCase } from './list-patients-use-case'

const listPatientsSpy = jest.fn();

const listPatients = new ListPatientsUseCase(
  { index: listPatientsSpy }
)


describe('List Patients', () => {
  it('Should be able to list patients', () => {
    expect(listPatients.index(
      
    ))
    expect(listPatientsSpy).toHaveBeenCalled();
  })
});