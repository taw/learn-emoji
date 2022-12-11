import ColorMatchGame from "./ColorMatchGame.svelte"
import EmojiMatchGame from "./EmojiMatchGame.svelte"
import EnglishAnimals from "./data/EnglishAnimals"
import EnglishColors from "./data/EnglishColors"
import EnglishFood from "./data/EnglishFood"
import FrenchAnimals from "./data/FrenchAnimals"
import FrenchIPAAnimals from "./data/FrenchIPAAnimals"
import PolishAnimals from "./data/PolishAnimals"
import PolishFood from "./data/PolishFood"

export default [
  {
    code: "en",
    name: "English",
    games: [
      {
        code: "animals",
        name: "Animals",
        component: EmojiMatchGame,
        data: EnglishAnimals,
      },
      {
        code: "colors",
        name: "Colors",
        component: ColorMatchGame,
        data: EnglishColors,
      },
      {
        code: "food",
        name: "Food",
        component: EmojiMatchGame,
        data: EnglishFood,
      },
    ],
  },
  {
    code: "fr",
    name: "French",
    games: [
      {
        code: "animals",
        name: "Animaux",
        component: EmojiMatchGame,
        data: FrenchAnimals,
      },
    ],
  },
  {
    code: "pl",
    name: "Polski",
    games: [
      {
        code: "animals",
        name: "Zwierzęta",
        component: EmojiMatchGame,
        data: PolishAnimals,
      },
      {
        code: "food",
        name: "Jedzenie",
        component: EmojiMatchGame,
        data: PolishFood,
      },
    ],
  },
  {
    code: "fr-ipa",
    name: "French IPA",
    games: [
      {
        code: "animals",
        name: "Animaux",
        // This is really terrible quality here
        component: EmojiMatchGame,
        data: FrenchIPAAnimals,
      },
    ],
  },
]
