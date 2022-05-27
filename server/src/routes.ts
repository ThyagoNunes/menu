import { Router } from 'express';

import { PrismaPatientsRepository } from './repositories/prisma/prisma-patients-repository';
import { PrismaCategoriesRepository } from './repositories/prisma/prisma-categories-repository';

import { ListPatientsUseCase } from './use-cases/patients/list-patients-use-case'
import { ShowPatientUseCase } from './use-cases/patients/show-patient-use-case';
import { CreatePatientsUseCase } from './use-cases/patients/create-patients-use-case';
import { UpdatePatientUseCase } from './use-cases/patients/update-patient-use-case';
import { DeletePatientUseCase } from './use-cases/patients/delete-patient-use-case';

import { ListCategoriesUseCase } from './use-cases/categories/list-categories-use-case';
import { ShowCategoryUseCase } from './use-cases/categories/show-category-use-case';
import { CreateCategoryUseCase } from './use-cases/categories/create-category-use-case';
import { UpdateCategoryUseCase } from './use-cases/categories/update-category-use-case';
import { DeleteCategoryUseCase } from './use-cases/categories/delete-category-use-case';

export const routes = Router();


routes.get('/pacientes', async (request, response) => {

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const listPatientsUseCase = new ListPatientsUseCase(
    prismaPatientsRepository,
  );

  const patientsInfo = await listPatientsUseCase.index();

  return response.status(200).send(patientsInfo)
});

routes.get('/pacientes/:id', async (request, response) => {
  const { id } = request.params;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const showPatientUseCase = new ShowPatientUseCase(
    prismaPatientsRepository,
  )

  const patientInfo = await showPatientUseCase.show({id})

  return response.status(200).json({data: patientInfo});
  
});

routes.post('/pacientes', async (request, response) => {
  
  const {name, order, nameBed } = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository()
  const createPatientsUseCase = new CreatePatientsUseCase(
    prismaPatientsRepository,
  );

  const patientCreate = await createPatientsUseCase.execute({
    name,
    order,
    nameBed,
  })

  return response.status(201).json({data: patientCreate})
});

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
});

routes.delete('/pacientes/:id', async (request, response) => {
  const { id } = request.params;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const deletePatientUseCase = new DeletePatientUseCase(
    prismaPatientsRepository,
  )

  await deletePatientUseCase.delete({id})

  return response.sendStatus(204).send({deleted: 'ok'});

});

routes.get('/categorias', async (request, response) => {

  const prismaCategoriesRepository = new PrismaCategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(
    prismaCategoriesRepository,
  );

  const categoriesInfo = await listCategoriesUseCase.index();

  return response.status(200).send(categoriesInfo);
});

routes.get('/categorias/:id', async (request, response) => {
  const { id } = request.params;

  const prismaCategoriesRepository = new PrismaCategoriesRepository();
  const showCategoryUseCase = new ShowCategoryUseCase(
    prismaCategoriesRepository,
  )

  const categoryShow = await showCategoryUseCase.show({id});

  return response.status(200).send(categoryShow);
});

routes.post('/categorias', async (request, response) => {
  const { name } = request.body;
  
  const prismaCategoriesRepository = new PrismaCategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(
    prismaCategoriesRepository,
  )

  const categoryNew = await createCategoryUseCase.execute({name})

  return response.status(200).send(categoryNew);
});

routes.put('/categorias/:id', async (request, response) => {
  const { id } = request.params; 
  const { name } = request.body 

  const prismaCategoriesRepositories = new PrismaCategoriesRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(
    prismaCategoriesRepositories,
  )

  const categoryUpdate = await updateCategoryUseCase.update({
    id, 
    name
  })
  
  return response.status(200).json({categoryUpdate});
})

routes.delete('/categorias/:id', async (request, response) => {
  const { id } = request.params;

  const prismaCategoriesRepository = new PrismaCategoriesRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    prismaCategoriesRepository
  );

  await deleteCategoryUseCase.delete({id})

  return response.status(204).json({deleted: 'OK'})

})