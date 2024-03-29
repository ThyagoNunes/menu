import { orderFunctionTypes, OrderFunctionTypes,  } from ".."
import { CloseButton } from "../../CloseButton"

interface OrderTypeStepProps {
  onOrderFunctionTypeChanged: (type: OrderFunctionTypes) => void
}

export function OrderTypeStep({onOrderFunctionTypeChanged}: OrderTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 ">Pedidos</span>

        <CloseButton />
      </header>

      <div className="flex py-2 gap-2 w-full">
        {Object.entries(orderFunctionTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onOrderFunctionTypeChanged(key as OrderFunctionTypes)}
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