
import { KEYS_SEARCH } from './type';

export const searchKeys = (keys) => {
    return {
        type: KEYS_SEARCH,
        payload: keys
    }
}