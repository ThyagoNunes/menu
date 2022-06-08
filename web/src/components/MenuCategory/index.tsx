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

  function handleRestartMenuCategory () {
    setCategoryFunctionType(null)
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 pb-20 relative top-12 left-48 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] h-[calc(25vw)] font-bold font-mono"> {/* space left to right */} {/* space left to right */}
     
        <header>
          <span className="text-xl leading-6"></span>

          <CloseButton />
        </header>

        {!categoryFunctionType ? (
          <CategoryTypeStep onCategoryFunctionTypeChanged={setCategoryFunctionType}/>
        ): (
          <CategoryContentStep
            categoryFunctionType={categoryFunctionType}
            onMenuCategoryRestartRequested={handleRestartMenuCategory}

          />
        )}


        <footer className=" absolute bottom-10 text-neutral-400 text-lg ">
          Feito por: <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}










