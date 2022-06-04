import { Router } from 'express';

import { PrismaPatientsRepository } from './repositories/prisma/prisma-patients-repository';
import { PrismaCategoriesRepository } from './repositories/prisma/prisma-categories-repository';
import { PrismaBedsRepository } from './repositories/prisma/prisma-beds-repository';

import { ListPatientsUseCase } from './use-cases/patients/list-patients-use-case'
import { ShowPatientUseCase } from './use-cases/patients/show-patient-use-case';
import { CreatePatientUseCase } from './use-cases/patients/create-patient-use-case';
import { UpdatePatientUseCase } from './use-cases/patients/update-patient-use-case';
import { DeletePatientUseCase } from './use-cases/patients/delete-patient-use-case';

import { ListCategoriesUseCase } from './use-cases/categories/list-categories-use-case';
import { ShowCategoryUseCase } from './use-cases/categories/show-category-use-case';
import { CreateCategoryUseCase } from './use-cases/categories/create-category-use-case';
import { UpdateCategoryUseCase } from './use-cases/categories/update-category-use-case';
import { DeleteCategoryUseCase } from './use-cases/categories/delete-category-use-case';

import { ListBedsUseCase } from './use-cases/beds/list-beds-use-case';
import { ShowBedUseCase } from './use-cases/beds/show-bed-use-case';
import { CreateBedUseCase } from './use-cases/beds/create-bed-use-case';
import { UpdateBedUseCase } from './use-cases/beds/update-bed-use-case';
import { DeleteBedUseCase } from './use-cases/beds/delete-bed-use-case';
import { OccupedBedsUseCase } from './use-cases/beds/occuped-beds-use-case';
import { VacantBedsUseCase } from './use-cases/beds/vacant-beds-use-case';

import { PrismaOrdersRepository } from './repositories/prisma/prisma-orders-repository';
import { ListOrdersUseCase } from './use-cases/orders/list-orders-use-case';
import { CreateOrderUseCase } from './use-cases/orders/create-order-use-case';

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
  
  const {name} = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository()
  const createPatientUseCase = new CreatePatientUseCase(
    prismaPatientsRepository,
  );

  const patientNew = await createPatientUseCase.execute({
    name,
  })

  return response.status(201).json({data: patientNew})
});

routes.put('/pacientes/:id', async (request, response) => {
  const { id } = request.params;
  const { name} = request.body;

  const prismaPatientsRepository = new PrismaPatientsRepository();
  const updatePatientUseCase = new UpdatePatientUseCase(
    prismaPatientsRepository,
  )
  
  const patientUpdated = await updatePatientUseCase.update({
    id,
    name,
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

  return response.sendStatus(204).send({deleted: 'OK'});

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
  
  return response.status(200).json({data: categoryUpdate});
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

routes.get('/leitos', async (request, response) => {
    const prismaBedsRepository = new PrismaBedsRepository();
    const listBedsUseCase = new ListBedsUseCase(
      prismaBedsRepository,
    )

    const beds = await listBedsUseCase.index();

    return response.status(200).json({data: beds})
});

routes.get('/leitos/ocupados', async (request, response) => {

  const prismaBedsRepository = new PrismaBedsRepository();
  const occupedBedsUseCase = new OccupedBedsUseCase(
    prismaBedsRepository,
  )

  const beds = await occupedBedsUseCase.occuped();

  return response.status(200).json({data: beds})
});

routes.get('/leitos/vagos', async (request, response) => {

  const prismaBedsRepository = new PrismaBedsRepository();
  const vacantBedsUseCase = new VacantBedsUseCase(
    prismaBedsRepository,
  )

  const beds = await vacantBedsUseCase.vacant();

  return response.status(200).json({data: beds})
});

routes.get('/leitos/:id', async (request, response) => {
  const { id } = request.params;

  const prismaBedsRepository = new PrismaBedsRepository();
  const showBedUseCase = new ShowBedUseCase(
    prismaBedsRepository,
  );

  const bed = await showBedUseCase.show({id});

  return response.status(200).json({bed});
})

routes.post('/leitos', async (request, response) => {
  const { name, patientId } = request.body;
  
  const prismaBedsRepository = new PrismaBedsRepository();
  const createBedUseCase = new CreateBedUseCase(
    prismaBedsRepository,
  )

  const bedCreated = await createBedUseCase.execute({name, patientId})

  return response.status(200).send({data: bedCreated})
})

routes.put('/leitos/:id', async (request, response) => {
  const { id } = request.params;
  const { name, patientId } = request.body;

  const prismaBedRepository = new PrismaBedsRepository();
  const updateBedUseCase = new UpdateBedUseCase(
    prismaBedRepository,
  )

  const bedUpdate = await updateBedUseCase.update({id, name, patientId});

  return response.status(200).json({data: bedUpdate})
})

routes.delete('/leitos/:id', async (request, response) => {
  const { id } = request.params;

  const prismaBedsRepository = new PrismaBedsRepository();
  const deleteBedUseCase = new DeleteBedUseCase(
    prismaBedsRepository,
  )

  await deleteBedUseCase.delete({id});

  return response.sendStatus(204).send({deleted: 'OK'})
})

routes.get('/pedidos', async (request, response) => {
  const prismaOrdersRepository = new PrismaOrdersRepository();
  const listOrdersUseCase = new ListOrdersUseCase(
    prismaOrdersRepository,
  )

  const orders = await listOrdersUseCase.index();

  return response.status(200).json({data: orders})
})

routes.post('/pedidos', async(request, response) => {
  const { 
    name, patientId, categoryId
  } = request.body;

  const prismaOrdersRepository = new PrismaOrdersRepository()
  const createOrderUseCase = new CreateOrderUseCase(
    prismaOrdersRepository,
  )

  const orderCreate = await createOrderUseCase.execute({
    name, 
    patientId, 
    categoryId
  })

  return response.status(200).json({data: orderCreate})
})