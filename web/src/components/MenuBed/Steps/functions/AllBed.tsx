import {useState } from "react";
import { api } from "../../../../lib/api"

/* interface BedsVacant {
  id: string,
  name: string ,
  patientId: string,
} */

export function AllBed() {  
  const [bedsVacant, setBedsVacant] = useState([])

    api.get('/leitos/vagos')
      .then(response => {
        /* console.log(response.data) */
        setBedsVacant(response.data)
      })

      const convertido = Object.entries(bedsVacant).map(([key, values]) => {
       return ([key, values])
      })


      console.log(typeof(convertido))
      

  return (
    <>

      {convertido.map(([key, values]) => {
        return (
          <li
            key={key}
          >
            {[,values]}
          </li>
        )
      })}
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        <select className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none" 
        >
        
{/*         { convertido.map(([key, values ]) => {
        return (
          <option
            key={key}
          >
            {values}
          </option> 
        )
      })}
 */}
         
        </select>
       
        <br /><br />
      </form>
    </>
  )
}