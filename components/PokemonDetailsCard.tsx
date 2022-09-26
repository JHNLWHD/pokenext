import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Pokemon } from '../interface'
import { useFetchPokemonSpecies } from '../hooks/useRequest'
import { getPokemonColor } from '../utils/color.utils'
import { UCFirst } from '../utils/string.utils'
import PokemonTypeBadge from './PokemonTypeBadge'
import PokemonGraph from './PokemonGraph'
import Spinner from './Spinner'
import WeightCard from './WeightCard'
import HeightCard from './HeightCard'
import MovesCard from './MovesCard'

type PokemonDetailsCardProps = {
  pokemon: Pokemon
}

export default function PokemonDetailsCard({
  pokemon,
}: PokemonDetailsCardProps) {
  const pokemonId = ('00' + pokemon.id).slice(-3)
  const pokemonType = pokemon.types[0].type.name
  const { pokemonBackground, pokemonBorder, pokemonText } =
    getPokemonColor(pokemonType)

  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`

  const { result, error } = useFetchPokemonSpecies(pokemon.name)

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <Spinner />

  const description = result.flavor_text_entries.filter(
    (flavor) => flavor.language.name === 'en'
  )[0].flavor_text

  const pokemonDescription = description
    ? description
        .replace('\f', '\n')
        .replace('\\00ad\n', '')
        .replace('\\00ad', '')
        .replace(' -\n', ' - ')
        .replace('-\n', '-')
        .replace('\n', ' ')
    : 'No description available for currently selected generation.'

  function renderPokemonType() {
    return pokemon.types.map((type, index) => (
      <PokemonTypeBadge key={index} pokemonType={type.type.name} />
    ))
  }
  return (
    <div className="container mx-auto max-w-md">
      <div
        className={`container flex flex-col ${pokemonBorder} my-2 gap-3 rounded-md border-4`}
      >
        <div className={`${pokemonBackground}`}>
          <div className="flex items-center justify-between">
            <Link href={'/'}>{`<-`}</Link>
            <span className="text-2xl font-bold text-white">
              {UCFirst(pokemon.name)}
            </span>
            <span className="mr-2 font-bold text-white">#{pokemonId}</span>
          </div>
          <div className="-mb-24">
            <Image
              src={img}
              alt={pokemon.name}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-12 flex items-center justify-center gap-4">
            {renderPokemonType()}
          </div>
          <div className={`${pokemonText} my-4 text-2xl font-bold`}>About</div>
          <div className="grid grid-cols-3 divide-x-4">
            <WeightCard />
            <HeightCard />
            <MovesCard />
          </div>
          <div className="mx-auto p-2 text-center">{pokemonDescription}</div>
          <div className={`${pokemonText} text-2xl font-bold`}>Base Stats</div>
          <div className="mx-auto w-full px-10">
            <PokemonGraph pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  )
}
