/* 
describe = switch de testes. 
Criando uma categorização para vários testes de uma única funcionalidade 

/*
10y28
v57
57.8 
*/

import { CreatePatientUseCase } from "./create-patient-use-case";

const createPatientSpy = jest.fn();

const createPatient = new CreatePatientUseCase(
  {create: createPatientSpy},
) 

describe('Create patient', () => { 
  it('should be able to create a patient', async () => {
    await expect(createPatient.execute({
      name: 'teste'
    })).resolves.not.toThrow();

    expect(createPatientSpy).toHaveBeenCalled();
  });

  it('Should not be able to create patient without name', async () => {
    await expect(createPatient.execute({
      name: '',
    })).rejects.toThrow();
  });
});