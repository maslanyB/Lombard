

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.17ef4916.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.bf986b00.js"];
export const stylesheets = [];
export const fonts = [];
