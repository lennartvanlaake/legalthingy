import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

export default {
	disableDependencyReinclusion: ['svench'],
	preprocess: preprocess({
		typescript: true,
		sourceMap: true
	}),
	kit: {
		vite: {
			ssr: {
				noExternal: [/^@smui(?:-extra)?\//]
			}
		},
		adapter: adapter({ out: 'dist' })
	}
};
