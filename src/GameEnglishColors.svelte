<script>
  import {sampleSize} from "lodash"
  import data from "./data/EnglishColors.json"
  import ColorMatchGame from "./ColorMatchGame.svelte"

  let gameData = sampleSize(data, 12).map((row) => ({
    name: row[1],
    color: row[0],
    done: false,
  }))
</script>

<ColorMatchGame {gameData} />
