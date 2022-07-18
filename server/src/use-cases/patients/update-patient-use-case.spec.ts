import { UpdatePatientUseCase } from './update-patient-use-case'

const updatePatientSpy = jest.fn();

const updatePatient = new UpdatePatientUseCase(
  { update: updatePatientSpy }
)

describe('Updated patient', () => {
  it('Should be update a patient', async () => {
    await expect(updatePatient.update({
      id: 'teste123456',
      name: 'teste', 
    })).resolves.not.toThrow();

    expect(updatePatientSpy).toHaveBeenCalled();
  })

  it('Should not be update patient without id', async () => {
    await expect(updatePatient.update({
      id: '', 
      name: 'teste123456', 
    })).rejects.toThrow();
  })

  it('Should not be update patient without name', async () => {
    await expect(updatePatient.update({
      id: 'teste123456', 
      name: '',
    })).rejects.toThrow();
  })
})