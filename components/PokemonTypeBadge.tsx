import React from "react";
import { getPokemonColor } from "../utils/color.utils";
import { UCFirst } from "../utils/string.utils";

type PokemonTypeBadgeProps = {
  pokemonType: string;
};

export default function PokemonTypeBadge({
  pokemonType,
}: PokemonTypeBadgeProps) {
  const { pokemonBackground } = getPokemonColor(pokemonType);
  return (
    <span
      className={`${pokemonBackground} inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none rounded-full text-white`}
    >
      {UCFirst(pokemonType)}
    </span>
  );
}
