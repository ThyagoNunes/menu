import {ShowPatientUseCase} from './show-patient-use-case'

const showPatientSpy = jest.fn();

const showPatient = new ShowPatientUseCase(
  {show: showPatientSpy}
)

describe('Show patient', () => {
  it('should be show a especific patient', async () => {
    await expect(showPatient.show({
      id: 'teste123456',
    })).resolves.not.toThrow();

    expect(showPatientSpy).toHaveBeenCalled();

  })

  it('should not be show a especific patient', async() => {
    await expect(showPatient.show({
      id: '', 
    })).rejects.toThrow();
  })
})