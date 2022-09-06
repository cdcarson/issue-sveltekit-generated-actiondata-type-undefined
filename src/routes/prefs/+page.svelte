<script lang="ts">
  import type {  ActionData, PageData } from './$types';
  export let data: PageData;
  export let form: ActionData;
  console.log(form)
</script>

<svelte:head>
  <title>Preferences</title>
</svelte:head>

<h1>
  Preferences
</h1>

<form method="POST">
  <div>
    <label for="color">Fave Color:</label>
    <input id="color" name="color" type="text">
  </div>
  <button>Save</button>
</form>

<hr>
form (ActionData):
<pre>{JSON.stringify(form, null, 1)}</pre>

<hr>
data (PageData):
<pre>{JSON.stringify(data, null, 1)}</pre>

