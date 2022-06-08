import { PatientFunctionTypes, patientFunctionTypes } from ".."

import { InsertPatient } from './functions/InsertPatient'
import { UpdatePatient } from './functions/UpdatePatient'
import { DeletePatient } from './functions/DeletePatient'

import { ArrowLeft } from "phosphor-react"
import { CloseButton } from "../../CloseButton"

interface PatientContentStepProps {
  patientFunctionType: PatientFunctionTypes
  onMenuPatientRestartRequested: () => void
}

export function PatientContentStep({
  patientFunctionType,
  onMenuPatientRestartRequested
}: PatientContentStepProps) {



  const patientMenuInfo = patientFunctionTypes[patientFunctionType]

  console.log(patientFunctionType);

  return (
    <>
      <header className="h-auto">
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onMenuPatientRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-6 h-6" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={patientMenuInfo.image.source} alt={patientMenuInfo.image.alt} />
          {patientMenuInfo.title}
        </span>

        <CloseButton />
      </header>

      {patientFunctionType === 'INSERT' ? (<InsertPatient />)
      :
      patientFunctionType === 'UPDATE' ? (<UpdatePatient/>) 
      :
      (<DeletePatient/>)
      }
    </>
  )
}