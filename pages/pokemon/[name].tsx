import React from "react";
import { useRouter } from "next/router";
import { useFetchPokemonDetails } from "../../hooks/useRequest";
import { getPokemonColor } from "../../utils/color.utils";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;
  const pokemonName = name as string;
  const { result, error } = useFetchPokemonDetails(pokemonName);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return <PokemonDetailsCard pokemon={result} />;
}
