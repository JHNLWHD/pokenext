import Image from 'next/image'
import React from 'react'
import ruler from '../assets/ruler.svg'

type HeightCardProps = {
  height: number
}

export default function HeightCard({ height }: HeightCardProps) {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex justify-around gap-2">
        <div>
          <Image src={ruler} alt="weighing scale" />
        </div>
        <div className="text-sm md:text-lg">{height / 10} m</div>
      </div>
      <div className="flex items-baseline text-xs font-semibold text-gray-600">
        Height
      </div>
    </div>
  )
}
