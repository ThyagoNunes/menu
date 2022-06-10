import { useEffect, useState } from "react";
import { api } from "../../../../lib/api"

interface BedVacant {
  name: string | null,
  patientId: string,
}

export function BedsVacant () {
  const [bedVacant, setBedVacant] = useState<BedVacant[]>([])

  useEffect(() => {
    api.get('/leitos/vagos')
      .then(response => {
        setBedVacant(response.data);
      })
  }, [])

  return (
    <>
      <select
          className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        >
          {bedVacant?.map((leitos) => {
            return (
              <option value="leitos">{leitos.patientId}</option>
            )
          })}
        </select>

    </>
  )
}