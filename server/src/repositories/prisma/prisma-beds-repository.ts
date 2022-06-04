import { prisma } from '../../prisma'
import { 
  BedsRepository, 
  BedsRepositoryCreateData, 
  BedsRepositoryDeleteData, 
  BedsRepositoryShowData, 
  BedsRepositoryUpdateData,
} from '../beds-repository';

export class PrismaBedsRepository implements BedsRepository {
  async index() {
    const beds = await prisma.bed.findMany({
      orderBy: {  
        name: 'asc'
     }
    })

    return beds;
  };

  async occuped() {
    const beds = await prisma.bed.findMany({
      where: {
        Patient: {
          isNot: null
        }}      
    })
    return beds;
  };

  async vacant() {
    const beds = await prisma.bed.findMany({
      // isNot: null is not null
      where: {
        Patient: {
          is: null, // is null
        }}      
    })
    return beds;
  };

  async show({id}: BedsRepositoryShowData) {
    const bed = await prisma.bed.findFirst({
      where: {
        id,
      },
    })
    return bed;
  };

  async create({patientId, name}: BedsRepositoryCreateData) {
    const bedNew = await prisma.bed.create({
      data: {
        name,
        patientId,
      },
    })
    return bedNew;
  };

  async update({id, name, patientId}: BedsRepositoryUpdateData) {
    const bedUpdate = await prisma.bed.update({
      where: {
        id,
      },
      data: {
        name, 
        patientId: patientId || null
      }
    })
    return bedUpdate;
  };
                     
  async delete({id}: BedsRepositoryDeleteData) { 
    await prisma.bed.delete({
      where: {
        id, 
      }
    })

    return 'Deleted'
  };
/* 
  async occuped({name, patientId}: BedsRepositoryOccuped) {
    const occuped = await prisma.bed.findMany({
      where: {}
    })
    console.log(occuped);
    return occuped
  } */

};