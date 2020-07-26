import { FETCH_ADDRESSES, FETCH_ADDRESS } from './../actions/type';

export default ( state = {}, action ) => {
    switch(action.type) {
        case FETCH_ADDRESSES:
            return action.payload;
        case FETCH_ADDRESS:
            return action.payload;
        default:
            return state;
    }

}