import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM} from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
}

export const deleteItems = () => {
    return {
        type: DELETE_ITEM
    };
}

export const addItems = () => {
    return {
        type: ADD_ITEMS
    };
}