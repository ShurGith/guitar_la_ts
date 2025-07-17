import { db } from '../data/db';
import type { Guitar, CartItem } from '../types';

export type CartActions =
    { type: 'ADD_TO_CART', payload: { guitar: Guitar } } |
    { type: 'REMOVE_FROM_CART', payload: { id: Guitar['id'] } } |
    { type: 'INCREASE_QUANTITY', payload: { id: Guitar['id'] } } |
    { type: 'DECREASE_QUANTITY', payload: { id: Guitar['id'] } } |
    { type: 'CLEAR_CART' };

export type CartState = {
    data: Guitar[];
    cart: CartItem[];
}

export const initialState: CartState = {
    data: db,
    cart: []
}
