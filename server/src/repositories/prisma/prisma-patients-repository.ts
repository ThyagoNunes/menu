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
    })
    
    return patients;
  }

  async show({id}: PatientsRepositoryShowData) {
    const patient = await prisma.patient.findFirst({
      where: {
        id,
      }
    })
    return patient;
  }

  async create({ name, order, nameBed} : PatientsRepositoryCreateDate) {
    const patients = await prisma.patient.create({
      data: {
        name, 
        order, 
        nameBed,
      }
    })
    return patients
  }

  async update({id, name, order, nameBed}: PatientsRepositoryUpdateData) {
   
    const patientUpdated = await prisma.patient.update({
      where: {
        id,
      },
      data: {
        name, 
        order, 
        nameBed,
      },
    })
    return patientUpdated;
  }

  async delete({id}: PatientsRepositoryDeleteData) {
    const patient = await prisma.patient.delete({
      where: {
        id,
      }
    })
    return patient;
  }
}