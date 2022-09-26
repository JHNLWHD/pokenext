import React from 'react'
import { Pokemon } from '../interface'
import { getPokemonColor } from '../utils/color.utils'
import { getPokemonStats, transformBaseStat } from '../utils/stats.util'
import ProgressBar from './ProgressBar'

type PokemonGraphProps = {
  pokemon: Pokemon
}

export default function PokemonGraph({ pokemon }: PokemonGraphProps) {
  const pokemonType = pokemon.types[0].type.name
  const pokemonStats = pokemon.stats.map((stat, index) => {
    const width = transformBaseStat(stat.stat.name, stat.base_stat)
    const { pokemonText } = getPokemonColor(pokemonType)

    const transformedBaseStat = (stat.base_stat + 1000).toString().slice(-3)

    return (
      <tr className="container gap-6" key={index}>
        <td className={`text-right font-bold ${pokemonText}`}>
          {getPokemonStats(stat.stat.name)}
        </td>
        <td className="px-2">{transformedBaseStat}</td>
        <ProgressBar pokemonType={pokemonType} width={width} />
      </tr>
    )
  })
  return (
    <div className="mx-auto w-full pb-4">
      <table>
        <tbody>{pokemonStats}</tbody>
      </table>
    </div>
  )
}
