<script>
  import SelectMenu from "./SelectMenu.svelte"
  import GameEnglishAnimals from "./GameEnglishAnimals.svelte"
  import GameFrenchAnimals from "./GameFrenchAnimals.svelte"
  import GamePolishAnimals from "./GamePolishAnimals.svelte"
  import GameEnglishFood from "./GameEnglishFood.svelte"
  import GamePolishFood from "./GamePolishFood.svelte"
  import GameFrenchIPAAnimals from "./GameFrenchIPAAnimals.svelte"
  import GameEnglishColors from "./GameEnglishColors.svelte"

  let selectedLanguage = "en"
  let selectedGame = "animals"
  let languageMenu = [
    {
      code: "en",
      name: "English",
      games: [
        {
          code: "animals",
          name: "Animals",
          component: GameEnglishAnimals,
        },
        {
          code: "colors",
          name: "Colors",
          component: GameEnglishColors,
        },
        {
          code: "food",
          name: "Food",
          component: GameEnglishFood,
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
          component: GameFrenchAnimals,
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
          component: GamePolishAnimals,
        },
        {
          code: "food",
          name: "Jedzenie",
          component: GamePolishFood,
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
          component: GameFrenchIPAAnimals,
        },
      ],
    },
  ]
  $: gameMenu = languageMenu.find(o => o.code == selectedLanguage).games
  $: defaultGame = gameMenu[0].code
  $: {
    if (!gameMenu.find(o => o.code == selectedGame)) {
      selectedGame = defaultGame
    }
  }
  $: gameComponent = gameMenu.find(o => o.code == selectedGame).component
</script>

<SelectMenu options={languageMenu} bind:selected={selectedLanguage} />
<SelectMenu options={gameMenu} bind:selected={selectedGame} />
<svelte:component this={gameComponent}/>
