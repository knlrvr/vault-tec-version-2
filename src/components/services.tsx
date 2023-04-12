import React from 'react'

import {
  TbCrown,
  TbInfinity,
  TbHeartPlus,
  TbTower,
  TbMoodCheck,
  TbTrees
} from 'react-icons/tb'

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto text-white mt-12 border-b border-yellow-400">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-baseline mb-12">
        <div className="flex flex-col items-center space-y-2">
          <TbMoodCheck 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Safety</span>
          <p className="text-sm">
            Our Vaults are built specifically to provide the maximum amount of comfort 
            to the inhabitants without compromising their safety. All Vaults are built 
            with reinforced concrete and solid metal sheeting, with an extra layer of 
            protection in the sheer amount of earth above each Vault.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbInfinity 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Survivability</span>
          <p className="text-sm">
            Each Vault entrance is controlled by a blast door and an airlock, with a 
            projected 2% failure rate in case of a direct hit by a nuclear missile. 
            Within each Vault are state of the art facilities, inluding living quarters, 
            rec rooms, diners, cafeterias, classroms, laundry rooms, lounges, medical 
            and scientific labs, and business offices.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbTrees 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Sanitation</span>
          <p className="text-sm">
            All entry points into our Vaults are overpressurized to keep contaminants 
            out. All inhabitants will be decontaminated before being registered with 
            a unique 11 digit Vault identification number and provided with clothing, 
            bedding, and other accommodations necessary for your future life within 
            the Vault. This ensures that there will be no contamination from the 
            surface.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbHeartPlus 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Health</span>
          <p className="text-sm">
            Your health will be assured by well-educated doctors with access to the 
            latest in medical technologies. Auto-Docs capable of performing a broad 
            variety of procedures and manufacturing medical drugs are standard issue 
            of the Vault Emergency Medical Labs.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbTower 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Security</span>
          <p className="text-sm">
            Each member of a Vault&apos;s security force is hand-picked by the Overseer 
            themselves. Each Vault is provided with enough firearms and armor to arm 
            ten men. Each Vault is designed with surface monitors and communication 
            systems to facilitate connections between Vaults.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbCrown 
            className='text-6xl text-yellow-400' />
          <span className="text-2xl">Amenities</span>
          <p className="text-sm">
            Utility meets comfort. Each inhabitant will be provided a Vault jumpsuit 
            to replace their own clothing. Enjoy private living quarters with the 
            latest in home appliances, like the Floorsuck Autocleaner Systems and 
            the Culinator 3000 Kitchen Systems, as well as access to complete libraries 
            of social and entertainment files.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services