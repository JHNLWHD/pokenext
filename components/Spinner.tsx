import Image from 'next/image'
import React from 'react'
import pokeball from '../assets/pokeball1.svg'

export default function Spinner() {
  return (
    <div className="absolute top-1/2 left-1/2">
      <div className="flex h-full items-center justify-center">
        <div className="relative">
          <div className="absolute flex h-16 w-16 animate-spin items-center justify-center">
            <Image src={pokeball} alt="pokeball" width={50} height={40} />
          </div>
        </div>
      </div>
    </div>
  )
}
