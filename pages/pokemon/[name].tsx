import React from 'react'
import { useRouter } from 'next/router'
import { useFetchPokemonDetails } from '../../hooks/useRequest'
import PokemonDetailsCard from '../../components/PokemonDetailsCard'
import ErrorPage from '../../components/ErrorPage'
import Spinner from '../../components/Spinner'
import Head from 'next/head'
import { UCFirst } from '../../utils/string.utils'

export default function Pokemon() {
  const router = useRouter()
  const { name } = router.query
  const pokemonName = name as string
  const { result, error } = useFetchPokemonDetails(pokemonName)

  if (error) return <ErrorPage />
  if (!result) return <Spinner />

  return (
    <>
      <Head>
        <title>Pokedex - {UCFirst(pokemonName)}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="m-auto flex h-screen px-6">
        <PokemonDetailsCard pokemon={result} />
      </div>
    </>
  )
}
