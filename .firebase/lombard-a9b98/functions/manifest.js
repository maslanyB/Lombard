export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.97ddcc1c.js","app":"_app/immutable/entry/app.c150e463.js","imports":["_app/immutable/entry/start.97ddcc1c.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/singletons.70432ad1.js","_app/immutable/entry/app.c150e463.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.bf986b00.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
