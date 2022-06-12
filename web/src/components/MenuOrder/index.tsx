import { useState } from "react"

import { CloseButton } from "../CloseButton"

import createOrderImageUrl from '../../assets/check-list.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateOrderImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { OrderTypeStep } from "./Steps/OrderTypeStep"
import { OrderContentStep } from "./Steps/OrderContentStep"

export const orderFunctionTypes = {
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

export type OrderFunctionTypes = keyof typeof orderFunctionTypes

export function MenuOrders() {
  const [orderFunctionType, setOrderFunctionType] = useState<OrderFunctionTypes | null>(null)

  function handleRestartMenuOrder() {
    setOrderFunctionType(null)
  }

  return (
    <>
      <div className="relative bg-zinc-900 p-4 pb-20 top-[5rem] m-auto rounded-2xl mt-10 flex flex-col items-center shadow-lg min-w-[65rem] max-w-[65rem] min-h-[calc(25vw)] max-h-[calc(25vw)] font-bold font-mono"> {/* space left to right */} {/* space left to right */}
        <header>
          <span className="text-xl leading-6 "></span>

          <CloseButton />
        </header>

        {!orderFunctionType ? (
          <OrderTypeStep onOrderFunctionTypeChanged={setOrderFunctionType} />
        ) : (
          <OrderContentStep
            orderFunctionType={orderFunctionType}
            onMenuOrderRestartRequested={handleRestartMenuOrder}
          />
        )}


<footer className=" fixed bottom-[1vw]  text-neutral-400 text-lg ">
          Feito por: <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}










