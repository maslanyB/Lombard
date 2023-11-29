import { c as create_ssr_component, a as validate_store, b as subscribe } from "../../chunks/ssr.js";
import { a as authStore } from "../../chunks/authStore.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.s-7IPF32Wcq3s8{min-height:100vh;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  validate_store(authStore, "authStore");
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `<main class="mainContainer s-7IPF32Wcq3s8">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
