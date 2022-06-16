import { FormEvent, useState } from "react"
import { api } from "../../../../lib/api"
import { ListPatients } from "./LIstPatients"

export function UpdatePatient() {

  const [comment, setComment] = useState<string | null>('')
  /* const [bed, setBed] = useState<string | null>('') */

  async function handleSubmitContent(event: FormEvent) {
    event.preventDefault()
    await api.put('/pacientes/:id', {
      name: comment,
    })
  }

  return (
    <>
      <form 
      
        onSubmit={handleSubmitContent} 
        className="relative top-12 my-4 w-full text-center flex flex-row gap-5 justify-center"
      >
        
        <select className="relative w-96 h[112] -top-16 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          onChange={event => setComment(event.target.value)}
          >
        <option value=""
        >
        {<ListPatients/>}
        </option>
        </select>


        <input
          className="relative w-96 min-h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="text"
          placeholder="Digite o nome do paciente:"
          onChange={event => setComment(event.target.value)}
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

        <footer className="absolute top-24 w-full flex gap-2 mt-2">
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            Enviar
          </button>
        </footer>

      </form>
    </>
  )
}