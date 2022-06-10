import { ArrowLeft } from "phosphor-react"
import { CategoryFunctionTypes, categoryFunctionTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { InsertCategory } from './functions/InsertCategory'
import { UpdateCategory } from './functions/UpdateCategory'
import { DeleteCategory } from './functions/DeleteCategory'

interface CategoryContentStepProps {
  categoryFunctionType: CategoryFunctionTypes
  onMenuCategoryRestartRequested: () => void
}

export function CategoryContentStep({
  categoryFunctionType,
  onMenuCategoryRestartRequested
}: CategoryContentStepProps) {
  const categoryMenuInfo = categoryFunctionTypes[categoryFunctionType]

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onMenuCategoryRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-6 h-6" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={categoryMenuInfo.image.source} alt={categoryMenuInfo.image.alt} />
          {categoryMenuInfo.title}
        </span>

        <CloseButton />
      </header>

      {categoryFunctionType === 'INSERT' ? (<InsertCategory />)
        :
        categoryFunctionType === 'UPDATE' ? (<UpdateCategory />)
          :
          (<DeleteCategory />)
      }

      
    </>
  )
}  