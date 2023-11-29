

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6e3fed61.js","_app/immutable/chunks/scheduler.fc0798b6.js","_app/immutable/chunks/index.f20f959c.js","_app/immutable/chunks/singletons.738c52be.js","_app/immutable/chunks/index.8e57a8c4.js"];
export const stylesheets = [];
export const fonts = [];
