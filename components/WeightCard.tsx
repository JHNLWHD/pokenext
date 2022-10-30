import Image from 'next/image'
import React from 'react'

import weighingScale from '../assets/scale.svg'

type WeightCardProps = {
  weight: number
}
export default function WeightCard({ weight }: WeightCardProps) {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex items-center justify-around gap-2">
        <div>
          <Image src={weighingScale} alt="weighing scale" />
        </div>
        <div className="text-sm md:text-lg">{weight / 10} kg</div>
      </div>
      <div className="items-center text-xs font-semibold text-gray-600">
        Weight
      </div>
    </div>
  )
}
