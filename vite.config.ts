import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
let author = '';
try {
	author = execSync('git config user.name').toString().trim();
} catch {
	console.warn('Could not get git user.name');
}

export default defineConfig({
	server: {
		allowedHosts: ['antropomorf.dev.local']
	},
	define: {
		'import.meta.env.VITE_PACKAGE_VERSION': JSON.stringify(pkg.version),
		'import.meta.env.VITE_AUTHOR': JSON.stringify(author)
	},
	plugins: [sveltekit()]
});
