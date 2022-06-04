/* 
describe = switch de testes. 
Criando uma categorização para vários testes de uma única funcionalidade 
*/

import { DeletePatientUseCase } from "./delete-patient-use-case";

const deletePatientSpy = jest.fn();

const deletePatient = new DeletePatientUseCase(
  {delete: deletePatientSpy},
) 

describe('Delete patient', () => { 
  it('should be able to delete a patient', async () => {
    await expect(deletePatient.delete({
      id: 'asdasdasdasddasd'
    })).resolves.not.toThrow();

    expect(deletePatientSpy).toHaveBeenCalled();
  });

    it('Should not be able to delete patient without id', async () => {
    await expect(deletePatient.delete({
      id: '',
    })).rejects.toThrow();
  });
});
