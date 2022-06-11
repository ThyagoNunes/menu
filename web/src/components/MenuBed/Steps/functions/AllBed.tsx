import { useEffect, useState } from "react";
import { api } from "../../../../lib/api"

interface BedVacant {
  name: string ,
  patientId: string,
}

export function AllBed() {  
  const [bedsVacant, setBedsVacant] = useState<BedVacant[]>([])

  useEffect(() => {
    api.get('/leitos/vagos')
      .then(response => {
        setBedsVacant(response.data);
      })
  }, [])

  return (
    <>
     {Object.entries(bedsVacant).map(([key, values]) => {
          return (
            <div 
            key={key}
            value={values}
            >
            {values.name}
            </div>
          )
         })}  
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        <select className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none" 
        >
        
        </select>
        <br /><br />
      </form>
    </>
  )
}