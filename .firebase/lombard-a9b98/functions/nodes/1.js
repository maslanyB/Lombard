

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.77af0a77.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.bf986b00.js","_app/immutable/chunks/singletons.56565f3c.js"];
export const stylesheets = [];
export const fonts = [];
