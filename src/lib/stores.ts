import { writable } from 'svelte/store';

// Stores the index of the currently active project card
function createActiveCardStore() {
	const { subscribe, set } = writable<number | null>(null);

	return {
		subscribe,
		set
	};
}

export const activeCardIndex = createActiveCardStore();
