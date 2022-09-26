export function getPokemonStats(stat: string) {
  let statName;
  switch (stat) {
    case "hp":
      statName = "HP";
      break;
    case "attack":
      statName = "ATK";
      break;
    case "defense":
      statName = "DEF";
      break;
    case '"special-attack"':
      statName = "SATK";
      break;
    case '"special-defense"':
      statName = "SDEF";
      break;
    case "speed":
      statName = "SPD";
      break;
    default:
      statName = "HP";
      break;
  }

  return statName;
}

export function transformBaseStat(name: string, stat: number) {
  const Highest_HP = 255;
  const Highest_ATK = 181;
  const Highest_DEF = 230;
  const Highest_SATK = 194;
  const Highest_SDEF = 230;
  const Highest_SPD = 200;
  let baseStat;
  switch (name) {
    case "hp":
      baseStat = stat / Highest_HP;
      break;
    case "attack":
      baseStat = stat / Highest_ATK;
      break;
    case "defense":
      baseStat = stat / Highest_DEF;
      break;
    case '"special-attack"':
      baseStat = stat / Highest_SATK;
      break;
    case '"special-defense"':
      baseStat = stat / Highest_SDEF;
      break;
    case "speed":
      baseStat = stat / Highest_SPD;
      break;
    default:
      baseStat = stat / Highest_HP;
      break;
  }

  const roundedStat = Math.round(baseStat * 100);

  return `${roundedStat.toString()}%`;
}
