import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		allowedHosts: ['antropomorf.dev.local']
	},
	plugins: [sveltekit()]
});
