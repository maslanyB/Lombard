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
		client: {"start":"_app/immutable/entry/start.0c53b3db.js","app":"_app/immutable/entry/app.eb8e4cd4.js","imports":["_app/immutable/entry/start.0c53b3db.js","_app/immutable/chunks/scheduler.fc0798b6.js","_app/immutable/chunks/singletons.738c52be.js","_app/immutable/chunks/index.8e57a8c4.js","_app/immutable/entry/app.eb8e4cd4.js","_app/immutable/chunks/scheduler.fc0798b6.js","_app/immutable/chunks/index.f20f959c.js","_app/immutable/chunks/environment.60829b93.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/privatedashboard",
				pattern: /^\/privatedashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
