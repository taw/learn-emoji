<script>
  export let gameData

  import {shuffle} from "lodash"

  let answerOrder = shuffle(gameData.map((row, i) => i))
  function selectName(i) {
    if (gameData[i].done) return
    selectedNameIndex = i
  }
  function selectAnswer(i) {
    if (i === selectedNameIndex) {
      correct ++
      gameData[i].done = true
      chooseNextIndex()
    } else {
      mistakes ++
    }
  }
  function chooseNextIndex() {
    // Prioritize next after selected, as player might not know prior ones
    for (let i = selectedNameIndex + 1; i < gameData.length; i++) {
      if (!gameData[i].done) {
        selectedNameIndex = i
        return
      }
    }
    for (let i = 0; i < gameData.length; i++) {
      if (!gameData[i].done) {
        selectedNameIndex = i
        return
      }
    }
    gameFinished = true
  }
  let selectedNameIndex = 0
  let correct = 0
  let mistakes = 0
  let gameFinished = false
</script>

<h3>Match color names and their boxes</h3>
<div>Correct: {correct}</div>
<div>Mistakes: {mistakes}</div>
<div>
  {#if gameFinished}
    The game is finished
  {/if}
</div>

<div class="game">
  <div class="names">
    {#each gameData as row, i}
      <div
        class:selected={i == selectedNameIndex}
        class:done={row.done}
        on:click={() => selectName(i)}
      ><span>{row.name}</span></div>
    {/each}
  </div>

  <div class="colors">
    {#each answerOrder as i}
      {@const row = gameData[i]}
      <span
        class:done={row.done}
        on:click={() => selectAnswer(i)}
        style="background-color: {row.color}"></span>
    {/each}
  </div>
</div>

<style>
  .game {
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .selected > span {
    background-color: #afa;
  }
  .done > span {
    color: #888;
  }
  .names > div {
    padding: 2px;
    cursor: pointer;
  }
  .colors {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .colors span {
    font-size: 300%;
    height: 32px;
    width: 32px;
    border: 1px solid black;
    cursor: pointer;
  }
  .colors .done {
    opacity: 0.2;
  }
  .done {
    cursor: inherit;
  }
</style>
