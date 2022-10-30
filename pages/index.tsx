import useFetchPokemon from '../hooks/useRequest'
import PokemonCard from '../components/PokemonCard'
import { NamedAPIResource } from '../interface'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import ErrorPage from '../components/ErrorPage'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import { useContext, useState } from 'react'
import { sortData } from '../utils/string.utils'
import { AppContext } from '../context/AppContext'

const Home: NextPageWithLayout = () => {
  const { nameSort } = useContext(AppContext)
  const [url, setUrl] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const { result, error } = useFetchPokemon(url)

  if (error) return <ErrorPage />
  if (!result) return <Spinner />

  function getId(url: string) {
    const parts = url.split('/')
    return parseInt(parts[parts.length - 2])
  }

  let pokemons = result.results.map((result) => {
    return {
      ...result,
      id: getId(result.url),
    }
  })

  if (nameSort) {
    pokemons.sort(sortData('name', 'asc'))
  } else {
    pokemons.sort(sortData('id', 'asc'))
  }

  const filterePokemons =
    searchKey === ''
      ? pokemons
      : pokemons.filter((p) => p.name.includes(searchKey))

  console.log(filterePokemons)

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
        <div className="container mx-auto mt-2 p-0 md:px-10">
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
