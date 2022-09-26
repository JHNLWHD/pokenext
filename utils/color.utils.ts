export function getPokemonColor(pokemonType: string) {
  let pokemonBackground, pokemonBorder, pokemonText;

  switch (pokemonType) {
    case "rock":
      pokemonBackground = "bg-rock";
      pokemonText = "text-rock";
      pokemonBorder = "border-rock";
      break;
    case "rock":
      pokemonBackground = "bg-rock";
      pokemonText = "text-rock";
      pokemonBorder = "border-rock";
      break;
    case "ghost":
      pokemonBackground = "bg-ghost";
      pokemonText = "text-ghost";
      pokemonBorder = "border-ghost";
      break;
    case "steel":
      pokemonBackground = "bg-steel";
      pokemonText = "text-steel";
      pokemonBorder = "border-steel";
      break;
    case "water":
      pokemonBackground = "bg-water";
      pokemonText = "text-water";
      pokemonBorder = "border-water";
      break;
    case "grass":
      pokemonBackground = "bg-grass";
      pokemonText = "text-grass";
      pokemonBorder = "border-grass";
      break;
    case "psychic":
      pokemonBackground = "bg-psychic";
      pokemonText = "text-psychic";
      pokemonBorder = "border-psychic";
      break;
    case "ice":
      pokemonBackground = "bg-ice";
      pokemonText = "text-ice";
      pokemonBorder = "border-ice";
      break;
    case "dark":
      pokemonBackground = "bg-dark";
      pokemonText = "text-dark";
      pokemonBorder = "border-dark";
      break;
    case "fairy":
      pokemonBackground = "bg-fairy";
      pokemonText = "text-fairy";
      pokemonBorder = "border-fairy";
      break;
    case "normal":
      pokemonBackground = "bg-normal";
      pokemonText = "text-normal";
      pokemonBorder = "border-normal";
      break;
    case "fighting":
      pokemonBackground = "bg-fighting";
      pokemonText = "text-fighting";
      pokemonBorder = "border-fighting";
      break;
    case "flying":
      pokemonBackground = "bg-flying";
      pokemonText = "text-flying";
      pokemonBorder = "border-flying";
      break;
    case "poison":
      pokemonBackground = "bg-poison";
      pokemonText = "text-poison";
      pokemonBorder = "border-poison";
      break;
    case "bug":
      pokemonBackground = "bg-bug";
      pokemonText = "text-bug";
      pokemonBorder = "border-bug";
      break;
    case "fire":
      pokemonBackground = "bg-fire";
      pokemonText = "text-fire";
      pokemonBorder = "border-fire";
      break;
    case "electric":
      pokemonBackground = "bg-electric";
      pokemonText = "text-electric";
      pokemonBorder = "border-electric";
      break;
    case "dragon":
      pokemonBackground = "bg-dragon";
      pokemonText = "text-dragon";
      pokemonBorder = "border-dragon";
      break;

    default:
      pokemonBackground = "bg-normal";
      pokemonText = "text-normal";
      pokemonBorder = "border-normal";
      break;
  }

  return { pokemonBackground, pokemonText, pokemonBorder };
}
