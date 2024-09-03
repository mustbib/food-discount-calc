import { writable } from 'svelte/store';
import type { personItem } from './store-type';

export const myStore = writable({
    value1: 0,
    value2: 0,
});

export const discountStore = writable({
    discount: 0,
    service: 0,
});

export const personCountStore = writable({
    countPerson: 0,
    sumBill: 0,
});

type PersonItem = {
    id: number;
    name: string;
    bill: number;
};
type PersonArray = PersonItem[];
export const personStore = writable<PersonArray>([]);

export const personList = writable<personItem[]>([]);
