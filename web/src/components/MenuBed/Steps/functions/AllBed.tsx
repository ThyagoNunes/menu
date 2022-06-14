import { useEffect, useState } from "react";
import { api } from "../../../../lib/api"



export function AllBed() {
interface BedsVacant {
  id: string, 
  name: string, 
  patientId: string
}

  const [detail, setDetail] = useState<BedsVacant[]>([]);

  const RecipeDetail = async () => {
    const res = await api('/leitos/vagos');
    Object.entries(res.data).map((value) => {
      return (
        value[1]
      )
    })
    console.log(res.data)

    setDetail(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    RecipeDetail();
  }, [detail]);

  console.log(`Hi ${detail}`);


  return (
    <>
      
      { 
        Object.entries(detail)?.map((values) => { 
        return (
   
          <li 
            key={values[1].id}
            value={values[1].name}
          >
            {values[1].name}
          </li>
          
        )
      })} 
      <form className="relative top-12 my-4 w-full text-center flex flex-row justify-center" >
        <select
          className="absolute w-96 h[120] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        >
         { 
        Object.entries(detail)?.map((values) => { 
        return (
         <>
          <option 
            key={values[1].id}
            value={values[1].name}
          >
            {values[1].name}
          </option>
          

          <option 
            key={values[1].id}
            value={values[1].name}
          >
            {values[1].name}
          </option>
          

           <option 
            key={values[1].id}
            value={values[1].name}
          >
            {values[1].name}
          </option>
          
         </>
        )
      })} 
        </select>
      </form>
    </>
  )
}


