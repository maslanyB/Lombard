import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "firebase/auth";
import { a as authStore } from "../../../chunks/authStore.js";
const AuthReset_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.s-LP7Cy_4NDZNL.s-LP7Cy_4NDZNL{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.container.s-LP7Cy_4NDZNL form.s-LP7Cy_4NDZNL{display:flex;flex-direction:column}.container.s-LP7Cy_4NDZNL div.s-LP7Cy_4NDZNL{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}",
  map: null
};
const AuthReset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container s-LP7Cy_4NDZNL"><div class="s-LP7Cy_4NDZNL"><button data-svelte-h="svelte-2a8ubo">Update Email</button> <button data-svelte-h="svelte-tv4w3u">Update Password</button></div> ${``} ${``} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.s-7EKMl0NWfSKN{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}h1.s-7EKMl0NWfSKN{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  validate_store(authStore, "authStore");
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let email;
  authStore.subscribe((curr) => {
    console.log("CURR", curr);
    email = curr?.currentUser?.email;
  });
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${$authStore.currentUser ? `<div class="s-7EKMl0NWfSKN"><h1 class="s-7EKMl0NWfSKN">CURRENT USER: ${escape(email)}</h1> ${validate_component(AuthReset, "AuthReset").$$render($$result, {}, {}, {})} <button data-svelte-h="svelte-pm79qf">Logout</button></div>` : `<div class="s-7EKMl0NWfSKN" data-svelte-h="svelte-j3y4m">Loading....</div>`}`;
});
export {
  Page as default
};
