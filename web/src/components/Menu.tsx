import { Popover } from '@headlessui/react'
import { Bed, ClipboardText, FirstAid, List } from "phosphor-react";

import { MenuPatients } from './MenuPatient';
import { MenuOrders } from './MenuOrder';
import { MenuCategories } from "./MenuCategory";
import { MenuBeds } from './MenuBed';

import hospital from '../assets/hospital.png'
import foodDelivery from '../assets/foodDelivery.png'


export function Menu() {
  return ( // initial render 
    <>
      <div className='fixed flex flex-row items-center justify-center top-[8rem] w-full' >

        <img className="relative left-[30rem] w-[7rem] r" src={hospital} alt="imagem de um hospital" />
        <img className="relative right-[30rem] w-28" src={foodDelivery} alt="imagem de uma mão segurando um sino" />
       {/*  <div className="flex flex-row relative m-auto md:left-0 md:top-28 justify-center"> */}


          <div className=' fixed flex flex-row min-w-[50px] max-w-[70rem]'>
            
          <Popover >
            <Popover.Button className="bg-brand-500 rounded-md mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <FirstAid className="w-6 h-6" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Pacientes
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute right-[-10rem] flex flex-row justify-center items-center">
              <MenuPatients />
            </Popover.Panel>
          </Popover>





          <Popover >
            <Popover.Button className="bg-brand-500 rounded-md mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <ClipboardText className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Pedidos
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute right-[-10rem]">
              <MenuOrders />
            </Popover.Panel>
          </Popover>





          <Popover >
            <Popover.Button className="bg-brand-500 rounded-md mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none ">
              <List className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Categorias
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute right-[-10rem]">
              <MenuCategories />
            </Popover.Panel>
          </Popover>





          <Popover >
            <Popover.Button className="bg-brand-500 rounded-md mx-5 px-3 h-12 text-white flex items-center group border-2 border-transparent hover:border-white focus:border-white focus:outline-none">
              <Bed className="w-8 h-8" />
              <span /* className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear" */>
                <span className="pl-2"></span>
                Leitos
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute right-[-10rem]">
              <MenuBeds />
            </Popover.Panel>
          </Popover>
          </div>

{/*         </div> */}
      </div>
    </>
  );
}
