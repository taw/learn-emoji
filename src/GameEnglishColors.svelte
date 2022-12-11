<script>
  import {initColorGame} from "./util"
  import data from "./data/EnglishColors"
  import ColorMatchGame from "./ColorMatchGame.svelte"

  let gameData = initColorGame(data)
</script>

<ColorMatchGame {gameData} />
