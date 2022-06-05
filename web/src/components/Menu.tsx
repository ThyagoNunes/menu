import { ClipboardText, FirstAid} from "phosphor-react";
import { Popover } from '@headlessui/react'
import { MenuPatients } from './MenuPatients';


export function Menu() {
  return ( // initial render 
  <>
    <Popover className="absolute left-4 top-4 md:left-10 md:top-10 ">

      <div className="flex flex-row gap-3">
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <FirstAid className="w-6 h-6"/>
        <span className="">
          <span className="pl-2"></span>
          Pacientes
        </span>
      </Popover.Button>
      </div>

    <Popover.Panel>
      <MenuPatients/>
    </Popover.Panel>

    </Popover>

  </>
  );
}

/* weight='duotone' size="200"  */
