

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.54173109.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.bf986b00.js","_app/immutable/chunks/singletons.70432ad1.js"];
export const stylesheets = [];
export const fonts = [];
