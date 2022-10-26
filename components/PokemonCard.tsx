import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useFetchPokemonDetails } from '../hooks/useRequest'
import { NamedAPIResource } from '../interface'
import { getPokemonColor } from '../utils/color.utils'
import ErrorPage from './ErrorPage'
import Spinner from './Spinner'

type PokemonCardProps = {
  pokemon: NamedAPIResource
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name } = pokemon
  const { result, error } = useFetchPokemonDetails(name)

  if (error) return <ErrorPage />

  if (!result) return <Spinner />

  const pokemonId = ('00' + result.id).slice(-3)
  const pokemonType = result.types[0].type.name
  const { pokemonBackground, pokemonBorder, pokemonText } =
    getPokemonColor(pokemonType)

  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div
        className={`container flex flex-col bg-white ${pokemonBorder} my-2 gap-3 rounded-md border-4 hover:-translate-y-3 hover:cursor-pointer hover:shadow-xl`}
      >
        <span className={`flex justify-end ${pokemonText} mr-2`}>
          #{pokemonId}
        </span>
        <div className="w-full">
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div
          className={`${pokemonBackground} flex items-center justify-center text-lg uppercase text-white`}
        >
          {name}
        </div>
      </div>
    </Link>
  )
}
