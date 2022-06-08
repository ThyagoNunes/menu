import { categoryFunctionTypes, CategoryFunctionTypes, } from ".."
import { CloseButton } from "../../CloseButton"

interface CategoryTypeStepProps {
  onCategoryFunctionTypeChanged: (type: CategoryFunctionTypes) => void
}

export function CategoryTypeStep({ onCategoryFunctionTypeChanged }: CategoryTypeStepProps) {
  return (
    <>

      <header>
        <span className="text-xl leading-6 ">Categorias</span>

        <CloseButton />
      </header>
      <div className="flex py-2 gap-2 w-full">
        {Object.entries(categoryFunctionTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onCategoryFunctionTypeChanged(key as CategoryFunctionTypes)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}