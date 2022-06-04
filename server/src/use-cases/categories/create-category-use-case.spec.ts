import { CreateCategoryUseCase } from './create-category-use-case'

const createCategorySpy = jest.fn();

const createCategory = new CreateCategoryUseCase(
  {create: createCategorySpy}
)

describe('Create category', () => {
  it('Should be able to Create category', async () => {
    await expect(createCategory.execute({
      name: 'comida', 
    })).resolves.not.toThrow();

    expect(createCategorySpy).toHaveBeenCalled();
  })
})