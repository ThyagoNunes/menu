export function UpdateCategory() {
  return (
    <>
      <form className="relative top-12 my-4 w-full text-center flex flex-row gap-2 justify-center">


        <select
          className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
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
        <br /><br />

        <input
          className="relative w-96 min-h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="text"
          placeholder="Categoria:"
        />
      
      </form>
    </>
  )
}