import { useEffect, useState } from "react";
import { api } from "../../../../lib/api"

 interface BedsVacant {
  id: string,
  name: string ,
  patientId: string,
} 

export function AllBed() {
  let [bedsVacant, setBedsVacant] = useState<BedsVacant[]>([
    { id: '1234abcd', name: 'thyago nunes', patientId: '1234abcd' },
  ])

  useEffect(() => {
    api.get('/leitos/vagos')
      .then(response => {
        setBedsVacant(response.data)
        return setBedsVacant
        
      })
  }, [])

/*   const results = Object.keys(bedsVacant).map(([key, values]) => {
    return [key, values]
  }) */
  console.log(bedsVacant);
  Object.keys(bedsVacant)

  return (
    <>
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        <select className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        >

    {Object.entries(bedsVacant).map(([key, values]) => {
      return (
        <option 
        key={key}
        value={[,values.name]}>
          {values.name}
        </option>
      )
    })}
        </select>

        <br /><br />
      </form>
    </>
  )
}