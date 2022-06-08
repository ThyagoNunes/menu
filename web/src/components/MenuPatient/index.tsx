import { useState } from "react"

import patientImageUrl from '../../assets/grandpa.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import { PatientTypeStep } from "./Steps/PatientTypeStep"
import { PatientContentStep } from "./Steps/PatientContentStep"

export const patientFunctionTypes = {
  INSERT: {
    title: 'Cadastrar',
    image: {
      source: patientImageUrl,
      alt: 'Imagem de um inseto',
    },
  },

  UPDATE: {
    title: 'Atualizar',
    image: {
      source: updateImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },

  DELETE: {
    title: 'Deletar',
    image: {
      source: deleteImageUrl,
      alt: 'Imagem de um balão de pensamentos',
    },
  },
};

export type PatientFunctionTypes = keyof typeof patientFunctionTypes

export function MenuPatients() {
  const [patientFunctionType, setPatientFunctionType] = useState<PatientFunctionTypes | null>(null)

  function handleRestartMenuPatient() {
    setPatientFunctionType(null)
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 pb-20 relative top-12 left-48 rounded-2xl mt-10 flex flex-col items-center shadow-lg w-[calc(66vw)] h-[calc(25vw)] font-bold font-mono"> {/* space left to right */}

        {!patientFunctionType ? (
          <PatientTypeStep onPatientFunctionTypeChanged={setPatientFunctionType} />
        ) : (
          <PatientContentStep
            patientFunctionType={patientFunctionType}
            onMenuPatientRestartRequested={handleRestartMenuPatient}
          />
        )}


        <footer className=" absolute bottom-10 text-neutral-400 text-lg ">
          Feito por: <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}