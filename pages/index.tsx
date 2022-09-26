import type { NextPage } from "next";
import useFetchPokemon from "../hooks/useRequest";
import PokemonCard from "../components/PokemonCard";
import { NamedAPIResource } from "../interface";

const Home: NextPage = () => {
  const { result, error } = useFetchPokemon();

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

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

export default Home;
