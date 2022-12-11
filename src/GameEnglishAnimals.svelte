<script>
  import {sampleSize} from "lodash"
  import data from "./data/EnglishAnimals"
  import EmojiMatchGame from "./EmojiMatchGame.svelte"

  let gameData = sampleSize(data, 12).map((row) => ({
    name: row[1],
    emoji: row[0],
    done: false,
  }))
</script>

<EmojiMatchGame {gameData} />
