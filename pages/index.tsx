import useFetchPokemon from '../hooks/useRequest'
import PokemonCard from '../components/PokemonCard'
import { NamedAPIResource } from '../interface'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import ErrorPage from '../components/ErrorPage'

const Home: NextPageWithLayout = () => {
  const { result, error } = useFetchPokemon()

  if (error) return <ErrorPage />
  if (!result) return <Spinner />

  const pokemons = result.results

  return (
    <main>
      <h1>My pokemons</h1>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pokemons.map((pokemon: NamedAPIResource) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    </main>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}

export default Home
