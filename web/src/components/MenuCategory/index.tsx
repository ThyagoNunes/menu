import { useState } from "react"

import { CloseButton } from "../CloseButton"

import createCategoryImageUrl from '../../assets/categories.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateCategoryImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteCategoryImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { CategoryTypeStep } from "./Steps/CategoryTypeStep"
import { CategoryContentStep } from "./Steps/CategoryContentStep"

export const categoryFunctionTypes = {
  INSERT: {
    title: 'Cadastrar',
    image: {
      source: createCategoryImageUrl,
      alt: 'Imagem de um inseto',
    },
  },

  UPDATE: {
    title: 'Atualizar',
    image: {
      source: updateCategoryImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },

  DELETE: {
    title: 'Deletar',
    image: {
      source: deleteCategoryImageUrl,
      alt: 'Imagem de um balão de pensamentos',
    },
  },
};

export type CategoryFunctionTypes = keyof typeof categoryFunctionTypes

export function MenuCategories() {
  const [categoryFunctionType, setCategoryFunctionType] = useState<CategoryFunctionTypes | null>(null)

  function handleRestartMenuCategory() {
    setCategoryFunctionType(null)
  }

  return (
    <>
      <div className="relative bg-zinc-900 p-4 pb-20 top-[5rem] m-auto rounded-2xl mt-10 flex flex-col items-center shadow-lg min-w-[65rem] max-w-[65rem] min-h-[calc(10vw)] max-h-[calc(20vw)]  font-bold font-mono"> {/* space left to right */} {/* space left to right */}

        <header>
          <span className="text-xl leading-6"></span>

          <CloseButton />
        </header>

        {!categoryFunctionType ? (
          <CategoryTypeStep onCategoryFunctionTypeChanged={setCategoryFunctionType} />
        ) : (
          <CategoryContentStep
            categoryFunctionType={categoryFunctionType}
            onMenuCategoryRestartRequested={handleRestartMenuCategory}

          />
        )}
      <footer className=" fixed bottom-[1vw]  text-neutral-400 text-lg ">
          Feito por: <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}










