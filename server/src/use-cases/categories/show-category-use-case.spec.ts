import { ShowCategoryUseCase } from './show-category-use-case'

const showCategorySpy = jest.fn();

const showCategory = new ShowCategoryUseCase(
  { show: showCategorySpy}
)

describe('Show category', () => {
  it('Should be able to Show category', async () => {
    await expect(showCategory.show({
      id: 'teste123456', 
    })).resolves.not.toThrow();
    expect(showCategorySpy).toHaveBeenCalled();
  })

  it('Should be not able show category without id', async () => {
    await expect(showCategory.show({
      id: '', 
    })).rejects.toThrow();
  })
})