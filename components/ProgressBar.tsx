import React from "react";
import { getPokemonColor } from "../utils/color.utils";

type ProgressBarProps = {
  pokemonType: string;
  width: string;
};

export default function ProgressBar({ pokemonType, width }: ProgressBarProps) {
  const { pokemonBackground } = getPokemonColor(pokemonType);

  return (
    <td className="w-full">
      <div className="bg-gray-200 w-full rounded-full">
        <div
          className={`${pokemonBackground} h-2 rounded-full`}
          style={{ width: `${width}` }}
        ></div>
      </div>
    </td>
  );
}
