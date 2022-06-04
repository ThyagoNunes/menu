import { UpdateCategoryUseCase } from './update-category-use-case'

const updateCategorySpy = jest.fn();

const updateCategory = new UpdateCategoryUseCase(
  { update: updateCategorySpy}
)

describe('Update category', () => {
  it('Should be able to Update category', async () => {
    await expect(updateCategory.update({
      id: 'teste123456', 
      name: 'comida'
    })).resolves.not.toThrow();
    expect(updateCategorySpy).toHaveBeenCalled();
  })
  
  it('Should be not able to Update category without id', async () => {
    await expect(updateCategory.update({
      id: '',
      name: 'Comida',
    })).rejects.toThrow();
  })

  it('Should be not able to update category without name', async () => {
    await expect(updateCategory.update({
      id: 'teste123456',
      name: '',
    })).rejects.toThrow();
  })
})