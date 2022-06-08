import { ArrowLeft } from "phosphor-react"
import { OrderFunctionTypes, orderFunctionTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { InsertOrder } from './functions/InsertOrder'
import { UpdateOrder } from './functions/UpdateOrder'
import { DeleteOrder } from './functions/DeleteOrder'


interface OrderContentStepProps {
  orderFunctionType: OrderFunctionTypes
  onMenuOrderRestartRequested: () => void
}

export function OrderContentStep({
  orderFunctionType,
  onMenuOrderRestartRequested
}: OrderContentStepProps) {
  const orderMenuInfo = orderFunctionTypes[orderFunctionType]

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onMenuOrderRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-6 h-6" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={orderMenuInfo.image.source} alt={orderMenuInfo.image.alt} />
          {orderMenuInfo.title}
        </span>

        <CloseButton />
      </header>

      {orderFunctionType === 'INSERT' ? (<InsertOrder />)
        :
        orderFunctionType === 'UPDATE' ? (<UpdateOrder />)
          :
          (<DeleteOrder />)
      }

      <form className="my-24 w-full justify-center">
        
      </form>
    </>
  )
}  