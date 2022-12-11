<script>
  export let data

  import {initEmojiGame, shuffleIndexes} from "./util"

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

  let gameData, answerOrder, selectedNameIndex, correct, mistakes, gameFinished
  $: init(data)

  // run this on init or when data changes
  function init(data) {
    gameData = initEmojiGame(data)
    answerOrder = shuffleIndexes(gameData)
    selectedNameIndex = 0
    correct = 0
    mistakes = 0
    gameFinished = false
  }
</script>

<h3>Match animals names and their emoji</h3>
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

  <div class="emoji">
    {#each answerOrder as i}
      {@const row = gameData[i]}
      <span
        class:done={row.done}
        on:click={() => selectAnswer(i)}
        >{row.emoji}</span>
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
  .emoji {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 300%;
  }
  .emoji {
    cursor: pointer;
  }
  .emoji .done {
    opacity: 0.2;
  }
  .done {
    cursor: inherit;
  }
</style>
