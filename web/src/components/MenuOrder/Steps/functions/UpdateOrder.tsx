export function UpdateOrder() {
  return (
    <>
      <form className="relative top-12 my-4 w-full text-center flex flex-row gap-2 justify-center">


        <select
          className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        >
          <option
            className="absolute bg-black h-48"
            value=" ">Aristeu
          </option>

          <option
            className="absolute bg-black h-48"
            value=" ">Rodolfo
          </option>
        </select>
        <br /><br />

        <select
          className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          placeholder="Categorias"
        >
          <option
            className="absolute bg-black h-48"
            value=" ">COMIDA
          </option>

          <option
            className="absolute bg-black h-48"
            value=" ">FILME
          </option>

        </select>

        <input
          className="relative w-96 min-h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="text"
          placeholder="Pedido:"
        />

        <select
          className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        >
          <option
            className="absolute bg-black h-48"
            value=" ">A1L1
          </option>

          <option
            className="absolute bg-black h-48"
            value=" ">A1L2
          </option>
        </select>
        <br /><br />
      </form>
    </>
  )
}