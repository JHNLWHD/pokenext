import useFetchPokemon from '../hooks/useRequest'
import PokemonCard from '../components/PokemonCard'
import { NamedAPIResource } from '../interface'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import ErrorPage from '../components/ErrorPage'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import { sortData } from '../utils/string.utils'

const Home: NextPageWithLayout = () => {
  const [url, setUrl] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [sortKey, setSortKey] = useState('id')
  const { result, error } = useFetchPokemon(url)

  if (error) return <ErrorPage />
  if (!result) return <Spinner />

  let pokemons = result.results

  if (sortKey === 'name') {
    pokemons.sort(sortData('name', 'asc'))
  } else {
    pokemons = result.results
  }

  const filterePokemons =
    searchKey === ''
      ? pokemons
      : pokemons.filter((p) => p.name.includes(searchKey))

  function renderPagination() {
    const prevUrl = result?.previous ? result.previous : ''
    const nextUrl = result?.next ? result.next : ''
    if (searchKey === '') {
      return <Pagination prevUrl={prevUrl} nextUrl={nextUrl} setUrl={setUrl} />
    }
  }

  return (
    <>
      <SearchBar setSearchKey={setSearchKey} />
      <main>
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {filterePokemons.map((pokemon: NamedAPIResource) => (
              <PokemonCard pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </main>
      {renderPagination()}
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}

export default Home
