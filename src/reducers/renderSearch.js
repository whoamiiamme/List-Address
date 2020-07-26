import { KEYS_SEARCH } from './../actions/type';


export default  (state = '', action) => {
    switch(action.type) {
        case KEYS_SEARCH:
            return action.payload;
        default: 
            return state;
    }
}