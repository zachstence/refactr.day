import { writable } from 'svelte/store';

const past = new Date(Date.parse('1/1/2021'))

const createLastRefactor = () => {
    const { subscribe, set } = writable<Date>(past)

    const reset = () => {
        set(new Date())
    };

    return {
        subscribe,
        reset,
    }
};

export const lastRefactor = createLastRefactor();