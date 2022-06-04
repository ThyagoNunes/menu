import { ListCategoriesUseCase } from './list-categories-use-case'

const listCategoriesSpy = jest.fn();

const listCategories = new ListCategoriesUseCase(
  { index: listCategoriesSpy }
)

describe('List categories', () => {
  it('Should be able list categories', () => {
    expect(listCategories.index(
      
    ))
    expect(listCategoriesSpy).toHaveBeenCalled();
  })
})