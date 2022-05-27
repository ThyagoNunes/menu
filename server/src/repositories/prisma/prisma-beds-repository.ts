import { prisma } from '../../prisma'
import { 
  BedsRepository, 
  BedsRepositoryCreateData, 
  BedsRepositoryDeleteData, 
  BedsRepositoryShowData, 
  BedsRepositoryUpdateData
} from '../beds-repository';

export class PrismaBedsRepository implements BedsRepository {
  async index() {
    const beds = await prisma.bed.findMany({})

    return beds;
  };

  async show({id}: BedsRepositoryShowData) {
    const patient = await prisma.bed.findFirst({
      where: {
        id,
      },
    })
    return patient;
  };

  async create({patientId, name}: BedsRepositoryCreateData) {
    const patientNew = await prisma.bed.create({
      data: {
        name,
        patientId,
      },
    })
    return patientNew;
  };

  async update({id, name, patientId}: BedsRepositoryUpdateData) {
    const patientUpdate = await prisma.bed.update({
      where: {
        id,
      },
      data: {
        name, 
        patientId, 
      }
    })
    return patientUpdate;
  };
                     
  async delete({id}: BedsRepositoryDeleteData) { 
    await prisma.bed.delete({
      where: {
        id, 
      }
    })

    return 'Deleted'
  };

};