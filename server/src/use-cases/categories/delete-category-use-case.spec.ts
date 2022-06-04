import { DeleteCategoryUseCase } from './delete-category-use-case'

const deleteCategorySpy = jest.fn();

const deleteCategory = new DeleteCategoryUseCase(
  { delete: deleteCategorySpy}
)

describe('Delete category', () => {
  it('Shoul be able delete category', async () => {
    await expect(deleteCategory.delete({
      id: 'teste123456',
    })).resolves.not.toThrow();
    
    expect(deleteCategorySpy).toHaveBeenCalled();
  })

  it('Should be not able delete category without id', async () => {
    await expect(deleteCategory.delete({
      id: '', 
    })).rejects.toThrow();
  })
})