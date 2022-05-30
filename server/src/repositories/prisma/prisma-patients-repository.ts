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
      include: {
        
      }
    })
    return patient;
  }

  async create({ name, order, category} : PatientsRepositoryCreateDate) {
    const patients = await prisma.patient.create({
      data: {
        name, 
        order, 
        category,
      }
    })
    return patients
  }

  async update({id, name, order, category}: PatientsRepositoryUpdateData) {
   
    const patientUpdated = await prisma.patient.update({
      where: {
        id,
      },

      data: {
        name, 
        order, 
        category,
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