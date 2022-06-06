import { useState } from "react"

import { CloseButton } from "../CloseButton"

import allBedImageUrl from '../../assets/all.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import occupiedBedImageUrl from '../../assets/occupied.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import vacantBedImageUrl from '../../assets/vacant.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { PatientTypeStep } from "./Steps/BedTypeStep"

export const bedTypes = {
  ALL: {
    title: 'Todos', 
    image: {
      source: allBedImageUrl, 
      alt: 'Imagem de um inseto', 
    },
  },

  OCCUPIED: {
    title: 'Ocupados', 
    image: {
      source: occupiedBedImageUrl, 
      alt: 'Imagem de uma lâmpada', 
    },
  },

  VACANT: {
    title: 'Vagos', 
    image: {
      source: vacantBedImageUrl, 
      alt: 'Imagem de um balão de pensamentos', 
    },
  },
};

export type BedTypes = keyof typeof bedTypes

export function MenuBeds() {
  const [bedMenu, setBedMenu] = useState<BedTypes | null>(null)

  return (
    <>
      <div className="bg-zinc-900 p-4 relative top-12 left-52 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] font-bold font-mono"> {/* space left to right */}
        <header>
          <span className="text-xl leading-6">Leitos</span>

          <CloseButton />
        </header>

        {!bedMenu ? (
          <PatientTypeStep onBedMenuChanged={setBedMenu}/>
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