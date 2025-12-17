import { writable } from 'svelte/store';

// Stores the index of the currently active project card
export const activeCardIndex = writable<number | null>(null);
