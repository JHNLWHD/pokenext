import React from 'react'
import { PokemonMove } from '../interface'
import { UCFirst } from '../utils/string.utils'

type MovesCardProps = {
  moves: PokemonMove[]
}

export default function MovesCard({ moves }: MovesCardProps) {
  const pokemonMoves: string[] = []
  moves.map((move) => {
    pokemonMoves.push(move.move.name)
  })

  return (
    <div
      data-tooltip-target="tooltip-left"
      data-tooltip-placement="left"
      className="flex flex-col items-center justify-around"
    >
      <div className="flex flex-col">
        <div className="text-md mx-auto">
          {pokemonMoves[0] ? UCFirst(pokemonMoves[0]) : ''}
        </div>
        <div className="text-md mx-auto">
          {pokemonMoves[1] ? UCFirst(pokemonMoves[1]) : ''}
        </div>
      </div>
      <div className="flex items-baseline text-xs font-semibold text-gray-600">
        Moves
      </div>
      <div
        id="tooltip-left"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm dark:bg-gray-700"
      >
        Tooltip on left
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  )
}
