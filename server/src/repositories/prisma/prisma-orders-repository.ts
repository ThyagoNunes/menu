import { prisma } from '../../prisma';
import { 
  OrdersRepository, 
  OrdersRepositoryShowData, 
  OrdersRepositoryCreateData, 
  OrdersRepositoryUpdateData,
  OrdersRepositoryDeleteData, 
} from '../orders-repository';

export class PrismaOrdersRepository implements OrdersRepository {
  async index() {
    const orders = await prisma.order.findMany({
      include:{
        Patient: {
          select: {
            name: true,
            Bed: {
              select: {
                name: true,
              }
            }
          }
        },
        Category: {
          select: {
            name:true
          },
        },
      }
    })

    return orders;
  };

  async show({id}: OrdersRepositoryShowData) {
    const ordersShow = await prisma.order.findFirst({
      where: {
        id
      }
    })
    return ordersShow;
  };

  async create({name, patientId, categoryId}: OrdersRepositoryCreateData) {
    const orderNew = await prisma.order.create({
      data: {
        name,
        patientId,
        categoryId,
      }
    })
    console.log(orderNew)
    return orderNew;
  };

  async update({id, name, patientId, categoryId}: OrdersRepositoryUpdateData) {
    const orderUpdate = await prisma.order.update({
      where: {
        id, 
      },
      data: {
        name, 
        patientId,
        categoryId,
      }
    })
    return orderUpdate;
  };

  async delete({id}: OrdersRepositoryDeleteData) { 
    await prisma.order.delete({
      where: {
        id, 
      }
    })
    return 'Deleted';
  }


}