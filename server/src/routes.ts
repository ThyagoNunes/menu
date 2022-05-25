import { Router } from 'express';
import { PrismaPatientsRepository } from './repositories/prisma/prisma-patients-repository';
import { SubmitPatientsUseCase } from './use-cases/submit-patients-use-case';
import { ListPatientsUseCase } from './use-cases/list-patients-use-case'
import { ShowPatientUseCase } from './use-cases/show-patient-use-case';
import { UpdatePatientUseCase } from './use-cases/update-patient-use-case';
import { DeletePatientUseCase } from './use-cases/delete-patient-use-case';

export const routes = Router();


routes.get('/pacientes', async (request, response) => {

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const listPatientsUseCase = new ListPatientsUseCase(
    prismaPatientsRepository,
  );

  const patientsInfo = await listPatientsUseCase.index();

  return response.status(200).send(patientsInfo)
})

routes.get('/pacientes/:id', async (request, response) => {
  const { id } = request.params;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const showPatientUseCase = new ShowPatientUseCase(
    prismaPatientsRepository,
  )

  const patientInfo = await showPatientUseCase.show({id})

  return response.status(200).json({data: patientInfo});
  
})

routes.post('/pacientes', async (request, response) => {
  
  const {name, order, nameBed } = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository()
  const submitPatientsUseCase = new SubmitPatientsUseCase(
    prismaPatientsRepository,
  );

  const patientCreate = await submitPatientsUseCase.execute({
    name,
    order,
    nameBed,
  })

  return response.status(201).json({data: patientCreate})
})

routes.put('/pacientes/:id', async (request, response) => {
  const { id } = request.params;
  const { name, order, nameBed } = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const updatePatientUseCase = new UpdatePatientUseCase(
    prismaPatientsRepository,
  )
  
  const patientUpdated = await updatePatientUseCase.update({
    id,
    name, 
    order, 
    nameBed
  })
  return response.status(200).json({data: patientUpdated})
})

routes.delete('/pacientes/:id', async (request, response) => {
  const { id } = request.params;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const deletePatientUseCase = new DeletePatientUseCase(
    prismaPatientsRepository,
  )

  await deletePatientUseCase.delete({id})

  return response.sendStatus(204).send({deleted: 'ok'});

})