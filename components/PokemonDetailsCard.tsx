import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Pokemon } from '../interface'
import {
  useFetchPokemonDetailsById,
  useFetchPokemonSpecies,
} from '../hooks/useRequest'
import { getPokemonColor } from '../utils/color.utils'
import { UCFirst } from '../utils/string.utils'
import PokemonTypeBadge from './PokemonTypeBadge'
import PokemonGraph from './PokemonGraph'
import Spinner from './Spinner'
import WeightCard from './WeightCard'
import HeightCard from './HeightCard'
import MovesCard from './MovesCard'
import arrowLeft from '../assets/arrow-left.svg'
import chevronRight from '../assets/chevron-right.svg'
import ErrorPage from './ErrorPage'

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

  const prevId = pokemon.id > 1 ? pokemon.id - 1 : 1
  const nextId = pokemon.id < 1154 ? pokemon.id + 1 : 1154

  const { result, error } = useFetchPokemonSpecies(pokemon.name)
  const { pokemonName: prevPokemon, error: error1 } =
    useFetchPokemonDetailsById(prevId)
  const { pokemonName: nextPokemon, error: error2 } =
    useFetchPokemonDetailsById(nextId)

  if (error || error1 || error2) return <ErrorPage />

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

  function getArrowLink(arrowType?: string) {
    const arrowOrientation = arrowType === 'right' ? '' : 'rotate-180'
    const linkAddress =
      arrowType === 'right'
        ? `/pokemon/${nextPokemon}`
        : `/pokemon/${prevPokemon}`
    return (
      <div className={`${arrowOrientation} p-4 hover:cursor-pointer`}>
        <Link href={linkAddress}>
          <Image src={chevronRight} alt="left-arrow" />
        </Link>
      </div>
    )
  }
  return (
    <div className="container m-auto max-w-md p-4 md:max-w-full">
      <div
        className={`container flex flex-col md:mx-auto md:flex-row ${pokemonBorder} my-2 gap-3 rounded-md border-4`}
      >
        <div className={`${pokemonBackground} relative min-h-full w-full`}>
          <div className="flex items-center justify-between pt-5">
            <div className="ml-4">
              <Link href={'/'}>
                <Image
                  src={arrowLeft}
                  alt="return"
                  className=" hover:cursor-pointer"
                />
              </Link>
              <span className="ml-6 text-2xl font-bold text-white">
                {UCFirst(pokemon.name)}
              </span>
            </div>
            <span className="pr-4 font-bold text-white">#{pokemonId}</span>
          </div>
          <div className="-mb-36">
            <Image
              src={img}
              alt={pokemon.name}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex justify-between">
            {getArrowLink()}
            {getArrowLink('right')}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full">
            <div className="mt-16 flex items-center justify-center gap-4 md:mt-6">
              {renderPokemonType()}
            </div>
            <div
              className={`${pokemonText} my-4 text-center text-2xl font-bold lg:mt-4`}
            >
              About
            </div>
            <div className="grid w-full grid-cols-3 divide-x-4">
              <WeightCard weight={pokemon.weight} />
              <HeightCard height={pokemon.height} />
              <MovesCard moves={pokemon.moves} />
            </div>
            <div className="mx-auto p-2 text-center lg:text-xl">
              {pokemonDescription}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className={`${pokemonText} text-2xl font-bold lg:my-6`}>
              Base Stats
            </div>
            <div className="mx-auto w-full px-10">
              <PokemonGraph pokemon={pokemon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
