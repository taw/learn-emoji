<script>
  export let options
  export let selected
</script>

<nav>
  {#each options as option}
    <div
      class:selected={option.code == selected}
      on:click={() => selected = option.code}
    >{option.name}</div>
  {/each}
</nav>

<style>
  nav {
    font-family: sans-serif;
    display: flex;
    gap: 5px;
    background-color: #222;
    color: white;
    text-transform: uppercase;
  }
  nav > div {
    padding: 4px;
  }
  .selected {
    background-color: #0a6;
  }
</style>
