import { Router } from 'express';
import { PrismaPatientsRepository } from './repositories/prisma/prisma-patients-repository';
import { SubmitPatientsUseCase } from './use-cases/submit-patients-use-case';

export const routes = Router();

routes.post('/pacientes', async (req, res) => {
  const { name, request, nameBed } = req.body;

  const prismaPatientsRepository = new PrismaPatientsRepository()
  const submitPatientsUseCase = new SubmitPatientsUseCase(
    prismaPatientsRepository,
  );

  await submitPatientsUseCase.execute({
    name,
    request,
    nameBed,
  })

  return res.status(201).send();
})

