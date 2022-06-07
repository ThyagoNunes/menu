import { orderTypes, OrderTypes,  } from ".."

interface OrderTypeStepProps {
  onOrderMenuChanged: (type: OrderTypes) => void
}

export function OrderTypeStep({onOrderMenuChanged}: OrderTypeStepProps) {
  return (
    <>
      <div className="flex py-2 gap-2 w-full">
        {Object.entries(orderTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onOrderMenuChanged(key as OrderTypes)}
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