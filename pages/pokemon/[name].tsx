import React from 'react'
import { useRouter } from 'next/router'
import { useFetchPokemonDetails } from '../../hooks/useRequest'
import { getPokemonColor } from '../../utils/color.utils'
import PokemonDetailsCard from '../../components/PokemonDetailsCard'
import ErrorPage from '../../components/ErrorPage'
import Spinner from '../../components/Spinner'

export default function Pokemon() {
  const router = useRouter()
  const { name } = router.query
  const pokemonName = name as string
  const { result, error } = useFetchPokemonDetails(pokemonName)

  if (error) return <ErrorPage />
  if (!result)
    return (
      <div className="absolute top-1/2 left-1/2">
        <Spinner />
      </div>
    )

  return <PokemonDetailsCard pokemon={result} />
}
