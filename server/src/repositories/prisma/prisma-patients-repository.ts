import { prisma } from "../../prisma";
import { 
  PatientsRepository, 
  PatientsRepositoryCreateDate, 
  PatientsRepositoryDeleteData, 
  PatientsRepositoryShowData, 
  PatientsRepositoryUpdateData } 
  from "../patients-repository";

export class PrismaPatientsRepository implements PatientsRepository {
  async index() {
    const patients = await prisma.patient.findMany({
      orderBy: {
        name: 'asc'
      },

      include: {
        Bed: {
          select: {
            name: true,
          }
        },
        Order: {
          select: {
            name: true
          }
        }
      },      
    })
    
    return patients;
  }

  async show({id}: PatientsRepositoryShowData) {
    const patient = await prisma.patient.findFirst({
      where: {
        id,
      }, 
  
    })
    return patient;
  }

  async create({ name} : PatientsRepositoryCreateDate) {
    const patients = await prisma.patient.create({
      data: {
        name,
      }
    })
    return patients
  }

  async update({id, name}: PatientsRepositoryUpdateData) {
   
    const patientUpdated = await prisma.patient.update({
      where: {
        id,
      },

      data: {
        name,
      },

  
    })
    return patientUpdated;
  }

  async delete({id}: PatientsRepositoryDeleteData) {
    await prisma.patient.delete({
      where: {
        id,
      }
    })
    return 'Deleted';
  }
}