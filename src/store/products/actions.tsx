//import { ActionCreator } from 'redux';

export enum ProductActionTypes {
    GET_ALL = 'GET_ALL', // this is treated as a const and should never change.
    GET_ONE = 'GET_ONE'
}

// Interface for out actions type(s)
export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL
}

// Interface for out actions type(s)
export interface IProductGetOneAction {
    type: ProductActionTypes.GET_ONE
}

// Gathering all of the actions (great if you add more!)
export type ProductActions = IProductGetAllAction | IProductGetOneAction;