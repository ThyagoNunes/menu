import { useEffect, useState } from "react";
import { api } from "../../../../lib/api"

interface Patients {
  id: string, 
  name: string, 
}

export function ListPatients() {
  const [patients, setPatients] = useState<Patients[]>([]);

  useEffect(() => {
    async function getPatients() {
      const response = await api.get("/pacientes")
      setPatients(response.data)
      console.log(setPatients)

    }
      
    getPatients()
  }, []);


/*   if(patients.length === 0){
    return null
  } */

  console.log(patients)
  return (
    <> 
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        <select className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none">
          {patients.map((patient) => {
            return(
              <option 
                className="bg-zinc-600"
                key={patient.id} 
                value={patient.name}>
                {patient.name}
              </option>
            )
          })}
        </select>
      </form>
    </>
  )
}


