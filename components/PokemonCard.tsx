import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFetchPokemonDetails } from "../hooks/useRequest";
import { NamedAPIResource } from "../interface";
import { getPokemonColor } from "../utils/color.utils";
import Spinner from "./Spinner";

type PokemonCardProps = {
  pokemon: NamedAPIResource;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name } = pokemon;
  const { result, error } = useFetchPokemonDetails(name);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <Spinner />;

  const pokemonId = ("00" + result.id).slice(-3);
  const pokemonType = result.types[0].type.name;
  const { pokemonBackground, pokemonBorder, pokemonText } =
    getPokemonColor(pokemonType);

  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div
        className={`container flex flex-col ${pokemonBorder} border-4 rounded-md gap-3 my-2 hover:cursor-pointer`}
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
          className={`${pokemonBackground} text-white uppercase text-lg flex justify-center items-center`}
        >
          {name}
        </div>
      </div>
    </Link>
  );
}
