import { useState } from "react"

import { CloseButton } from "../CloseButton"

import createCategoryImageUrl from '../../assets/categories.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateCategoryImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteCategoryImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { CategoryTypeStep } from "./Steps/CategoryTypeStep"

export const categoryTypes = {
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

export type CategoryTypes = keyof typeof categoryTypes

export function MenuCategories() {
  const [categoryMenu, setCategoryMenu] = useState<CategoryTypes | null>(null)

  return (
    <>
      <div className="bg-zinc-900 p-4 relative top-12 left-52 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] font-bold font-mono"> {/* space left to right */}
        <header>
          <span className="text-xl leading-6">Categorias</span>

          <CloseButton />
        </header>

        {!categoryMenu ? (
          <CategoryTypeStep onCategoryMenuChanged={setCategoryMenu}/>
        ): (
          <p>Hello World</p>
        )}


        <footer className="text-xs text-neutral-400">
          Feito com ♥ Por <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}










