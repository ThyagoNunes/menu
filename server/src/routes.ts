import { Router } from 'express';
import { PrismaPatientsRepository } from './repositories/prisma/prisma-patients-repository';
import { SubmitPatientsUseCase } from './use-cases/submit-patients-use-case';

export const routes = Router();

routes.post("/pacientes", async (request, response) => {
  
  const { id, name, order, nameBed } = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository()
  const submitPatientsUseCase = new SubmitPatientsUseCase(
    prismaPatientsRepository,
  );

  await submitPatientsUseCase.execute({
    id,
    name,
    order,
    nameBed,
  })

  return response.status(201).json({data: {id, name, order, nameBed}})
});

routes.get('/pacientes', async (request, response) => {
  const prismaPatientsRepository = new PrismaPatientsRepository();
  const submitPatientsUseCase = new SubmitPatientsUseCase(
    prismaPatientsRepository,
  );

  await submitPatientsUseCase.index();

  return response.status(201).json({data: prismaPatientsRepository.index})
})