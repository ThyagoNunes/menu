import { ArrowLeft } from "phosphor-react"
import { BedFunctionTypes, bedFunctionTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { AllBed } from './functions/AllBed'
import { OccupiedBed } from './functions/OccupiedBed'
import { VacantBed } from './functions/VacantBed'

interface BedContentStepProps {
  bedFunctionType: BedFunctionTypes
  onMenuBedRestartRequested: () => void
}
export function BedContentStep({ 
  bedFunctionType, 
  onMenuBedRestartRequested 
}: BedContentStepProps) {
  const bedMenuInfo = bedFunctionTypes[bedFunctionType]

  /* h-[calc(66vw)] */
  return (
    <>
      <header className="h-auto">
        <button 
        type="button" 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onMenuBedRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-6 h-6"/>
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={bedMenuInfo.image.source} alt={bedMenuInfo.image.alt} />
         
        </span>
         
        <CloseButton />
      </header>

      {bedFunctionType === 'ALL' ? (<AllBed/>)
      :
      bedFunctionType === 'OCCUPIED' ? (<OccupiedBed/>)
      :
      (<VacantBed/>)
      }
    </>
  )
}  