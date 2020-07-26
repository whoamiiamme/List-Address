import { 
    NEXT_PAGE,
    PREVIOUS_PAGE,
    EDIT_LENGTH
 } from './type';

export const nextPage = (page) => {
    return {
        type: NEXT_PAGE,
        payload: page
    }
}

export const previousPage = (page) => {
    return {
        type: PREVIOUS_PAGE,
        payload: page
    }
}

export const editTotal = (length) => {
    return {
        type: EDIT_LENGTH,
        payload: length
    }
}
