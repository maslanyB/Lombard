

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6f7aeeec.js","_app/immutable/chunks/scheduler.fc0798b6.js","_app/immutable/chunks/index.f20f959c.js","_app/immutable/chunks/authStore.068da14b.js","_app/immutable/chunks/index.8e57a8c4.js"];
export const stylesheets = ["_app/immutable/assets/2.0e7dd7dc.css"];
export const fonts = [];
