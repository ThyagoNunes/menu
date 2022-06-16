import { useState } from "react"

import patientImageUrl from '../../assets/grandpa.png' // sub this icon for other icon with appearance equal INSERT SOMETHING 
import updateImageUrl from '../../assets/checklist.png' // sub this icon for other icon with appearance equal UPDATE SOMETHING
import deleteImageUrl from '../../assets/delete.png' // sub this icon for other icon with appearance equal DELETE SOMETHING
import listImageUrl from '../../assets/medical-record.png' // sub this icon for other icon with appearance equal DELETE SOMETHING

import { PatientTypeStep } from "./Steps/PatientTypeStep"
import { PatientContentStep } from "./Steps/PatientContentStep"

export const patientFunctionTypes = {
  INSERT: {
    title: 'Cadastrar',
    image: {
      source: patientImageUrl,
      alt: 'Imagem de um senhor de idade',
    },
  },

  LIST: {
    title: 'Listar',
    image: {
      source: listImageUrl,
      alt: 'Imagem de uma pasta que contém informações',
    },
  },

  UPDATE: {
    title: 'Atualizar',
    image: {
      source: updateImageUrl,
      alt: 'Imagem de umaa prancheta sendo atualizada',
    },
  },

  DELETE: {
    title: 'Deletar',
    image: {
      source: deleteImageUrl,
      alt: 'Imagem de uma lixeira',
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
      <div className="relative bg-zinc-900 p-4 pb-20 top-[2rem] m-auto rounded-2xl mt-10 flex flex-col items-center shadow-lg min-w-[65rem] max-w-[65rem] min-h-[calc(30vw)] max-h-[calc(40vw)] font-bold font-mono">

        {!patientFunctionType ? (
          <PatientTypeStep onPatientFunctionTypeChanged={setPatientFunctionType} />
        ) : (
          <PatientContentStep
            patientFunctionType={patientFunctionType}
            onMenuPatientRestartRequested={handleRestartMenuPatient}
          />
        )}

<footer className=" fixed bottom-[1vw]  text-neutral-400 text-lg ">
          Feito por: <a className="underline underline-offset-2" href="https://github.com/ThyagoNunes">Thyago Nunes</a>
        </footer>
      </div>
    </>
  )
}