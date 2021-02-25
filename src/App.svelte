<script>
  import Button from "./Button.svelte";
  export let name;
  export let initial_count = 0;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>Hello {name} CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>
	<Button count={ initial_count }/>
</main>