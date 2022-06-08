import { useState } from "react"

import { CloseButton } from "../CloseButton"

import allBedImageUrl from '../../assets/all.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import occupiedBedImageUrl from '../../assets/occupied.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import vacantBedImageUrl from '../../assets/vacant.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { BedTypeStep } from "./Steps/BedTypeStep"
import { BedContentStep } from "./Steps/BedContentStep"

export const bedFunctionTypes = {
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

export type BedFunctionTypes = keyof typeof bedFunctionTypes

export function MenuBeds() {
  const [bedFunctionType, setBedFunctionType] = useState<BedFunctionTypes | null>(null)

  function handleRestartMenuBed() {
    setBedFunctionType(null)
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 pb-20 relative top-12 left-48 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] h-[calc(25vw)] font-bold font-mono"> {/* space left to right */} {/* space left to right */}
        <header>
          <span className="text-xl leading-6">Leitos</span>

          <CloseButton />
        </header>

        {!bedFunctionType ? (
          <BedTypeStep onBedMenuChanged={setBedFunctionType}/>
        ): (
          <BedContentStep
            bedFunctionType={bedFunctionType}
            onMenuBedRestartRequested={handleRestartMenuBed}
          />
        )}


        <footer className=" absolute bottom-10 text-neutral-400 text-lg ">
          Feito por <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}