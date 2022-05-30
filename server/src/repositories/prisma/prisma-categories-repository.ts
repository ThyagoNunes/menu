import { prisma } from "../../prisma";
import { 
  CategoriesRepository, 
  CategoriesRepositoryCreateData, 
  CategoriesRepositoryShowData, 
  CategoriesRepositoryUpdateData,
  CategoriesRepositoryDeleteData,
  } from "../categories-repository";

export class PrismaCategoriesRepository implements CategoriesRepository {
  async index() {
    const categories = await prisma.category.findMany({
      
    });
    return categories;
  };

  async show({id}: CategoriesRepositoryShowData) {
    const category = await prisma.category.findFirst({
      where: {
        id,
      }
    })
    return category;
  };

  async create({name}: CategoriesRepositoryCreateData) {
    const categoryNew = await prisma.category.create({
      data: {
        name,
      }
    })
    return categoryNew;
  };

  async update({id, name}: CategoriesRepositoryUpdateData) {
    const categoryUpdate = await prisma.category.update({
      where: {
        id, 
      },
      data: {
        name,
      }
    })
    return categoryUpdate;
  };

  async delete({id}: CategoriesRepositoryDeleteData) {
    await prisma.category.delete({
      where: {
        id, 
      }
    })
    return 'Deleted'
  }
}
