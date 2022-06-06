import { Popover } from '@headlessui/react'
import { Bed, ClipboardText, FirstAid, List } from "phosphor-react";

import { MenuPatients } from './MenuPatient';
import { MenuOrders } from './MenuOrder';
import { MenuCategories } from "./MenuCategory";

import hospital from '../assets/hospital.png'
import foodDelivery from '../assets/foodDelivery.png'
import { MenuBeds } from './MenuBed';
/* import diet from '../assets/diet.png' */



export function Menu() {
  return ( // initial render 
    <>
    <div >
      
      <img className="absolute top-16 right-96 w-32 r" src={hospital} alt="imagem de um hospital" />
      <img className="absolute top-10 left-96 w-32" src={foodDelivery} alt="imagem de uma mão segurando um sino" />
      {/* <img className="absolute top-10 left-44 w-32" src={diet} alt="imagem de comidas saudavéis" /> */}
      <div className="flex flex-row relative m-auto md:left-0 md:top-28 justify-center">


          <Popover>
            <Popover.Button className="bg-brand-500 rounded-full mx-5 px-3 h-12 text-white font-bold flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <FirstAid className="w-6 h-6" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Pacientes
              </span>
            </Popover.Button>

            <Popover.Panel className=" absolute left-40">
              <MenuPatients />
            </Popover.Panel>
          </Popover>

          <Popover >
            <Popover.Button className="bg-brand-500 rounded-full mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <ClipboardText className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Pedidos
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute left-40">
              <MenuOrders />
            </Popover.Panel>
          </Popover>

          <Popover >
            <Popover.Button className="bg-brand-500 rounded-full mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none ">
              <List className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Categorias
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute left-40">
              <MenuCategories />
            </Popover.Panel>
          </Popover>

          <Popover >
            <Popover.Button className="bg-brand-500 rounded-full mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <Bed className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Leitos
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute left-40">
              <MenuBeds />
            </Popover.Panel>
          </Popover>
          
      </div>
      </div>
    </>
  );
}

/* weight='duotone' size="200"  */
