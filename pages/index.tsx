import useFetchPokemon from "../hooks/useRequest";
import PokemonCard from "../components/PokemonCard";
import { NamedAPIResource } from "../interface";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const Home: NextPageWithLayout = () => {
  const { result, error } = useFetchPokemon();

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <Spinner />;

  const pokemons = result.results;

  return (
    <main>
      <h1>My pokemons</h1>
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pokemons.map((pokemon: NamedAPIResource) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Home;
