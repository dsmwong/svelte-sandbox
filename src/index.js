import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "prop anything",
    initial_count: 5
  }
});

export default app;
