import { patientFunctionTypes, PatientFunctionTypes, } from ".."
import { CloseButton } from "../../CloseButton"

interface PatientTypeStepProps {
  onPatientFunctionTypeChanged: (type: PatientFunctionTypes) => void
}

export function PatientTypeStep({ onPatientFunctionTypeChanged }: PatientTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 ">Pacientes</span>

        <CloseButton />
      </header>

      <div className="relative flex py-2 gap-2 w-full">
        {Object.entries(patientFunctionTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onPatientFunctionTypeChanged(key as PatientFunctionTypes)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}


      </div>
    </>
  )
}