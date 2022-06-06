import { useState } from "react"

import { CloseButton } from "../CloseButton"

import createOrderImageUrl from '../../assets/check-list.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateOrderImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { OrderTypeStep } from "./Steps/OrderTypeStep"

export const orderTypes = {
  INSERT: {
    title: 'Cadastrar', 
    image: {
      source: createOrderImageUrl, 
      alt: 'Imagem de um inseto', 
    },
  },

  UPDATE: {
    title: 'Atualizar', 
    image: {
      source: updateOrderImageUrl, 
      alt: 'Imagem de uma lâmpada', 
    },
  },

  DELETE: {
    title: 'Deletar', 
    image: {
      source: deleteImageUrl, 
      alt: 'Imagem de um balão de pensamentos', 
    },
  },
};

export type OrderTypes = keyof typeof orderTypes

export function MenuOrders() {
  const [orderMenu, setOrderMenu] = useState<OrderTypes | null>(null)

  return (
    <>
      <div className="bg-zinc-900 p-4 relative top-12 left-52 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] font-bold font-mono"> {/* space left to right */}
        <header>
          <span className="text-xl leading-6">Pedidos</span>

          <CloseButton />
        </header>

        {!orderMenu ? (
          <OrderTypeStep onOrderMenuChanged={setOrderMenu}/>
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










