<script>
  import {initEmojiGame} from "./util"
  import data from "./data/FrenchAnimals"
  import EmojiMatchGame from "./EmojiMatchGame.svelte"

  let gameData = initEmojiGame(data)
</script>

<EmojiMatchGame {gameData} />
