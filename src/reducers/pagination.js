import { NEXT_PAGE, PREVIOUS_PAGE, EDIT_LENGTH, FETCH_ADDRESSES} from './../actions/type';

    const initialValues = {
        total: null,
        per_page: 3,     
        current_page: 1 }

    const countProduct = (lists) => {
        var newArr = Object.keys(lists);
        return newArr.length;   
    }

export default (state = initialValues, action) => {
    switch(action.type) {
        case FETCH_ADDRESSES:
            return {...state,total: countProduct(action.payload)};
        case NEXT_PAGE:
            return { ...state, current_page: action.payload };
        case PREVIOUS_PAGE:
            return {...state, current_page: action.payload };
        case EDIT_LENGTH:
            return { ...state, total: action.payload }
        default:
            return state;
    }
}