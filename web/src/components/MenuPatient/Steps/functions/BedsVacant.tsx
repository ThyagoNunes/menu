import { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../../../lib/api"

interface BedsVacant {
  id: string, 
  name: string, 
  patientId?: string
}

export function BedsVacant() {
  const [bedsVacant, setBedsVacant] = useState<BedsVacant[]>([]);
  const [bedName, setBedName] = useState('')

  useEffect(() => {
    async function getLeitosVagos() {
      const response = await api.get("/leitos/vagos")
      setBedsVacant(response.data.data)
    }
    getLeitosVagos()
  }, []);

  const handleBed=(event: ChangeEvent<HTMLSelectElement>)=>{
    const getBedName = event.target.value
    console.log(getBedName)
    setBedName(getBedName)
  }

  if(bedsVacant.length === 0){
    return null
  }

  console.log(bedsVacant)
  return (
    <> 
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        
        <select 
        className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        onChange={(e)=>handleBed(e)}
        >
          
          {bedsVacant.map((bed) => {
            return(
              <option 
                className="bg-zinc-600"
                key={bed.id} 
                value={bed.name}>
                {bed.name}
              </option>
            )
          })}
        </select>
      </form>
    </>
  )
}


