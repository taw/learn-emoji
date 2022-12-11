<script>
  import SelectMenu from "./SelectMenu.svelte"
  import languageMenu from "./games"

  let selectedLanguage = "en"
  let selectedGame = "animals"
  $: gameMenu = languageMenu.find(o => o.code == selectedLanguage).games
  $: defaultGame = gameMenu[0].code
  $: {
    if (!gameMenu.find(o => o.code == selectedGame)) {
      selectedGame = defaultGame
    }
  }
  $: game = gameMenu.find(o => o.code == selectedGame)
  $: gameComponent = game.component
  $: gameData = game.data
  $: console.log({gameComponent, gameData})
</script>

<SelectMenu options={languageMenu} bind:selected={selectedLanguage} />
<SelectMenu options={gameMenu} bind:selected={selectedGame} />
<svelte:component this={gameComponent} data={gameData}/>
