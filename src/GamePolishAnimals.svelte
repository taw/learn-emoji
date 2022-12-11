<script>
  import {initEmojiGame} from "./util"
  import data from "./data/PolishAnimals"
  import EmojiMatchGame from "./EmojiMatchGame.svelte"

  let gameData = initEmojiGame(data)
</script>

<EmojiMatchGame {gameData} />
