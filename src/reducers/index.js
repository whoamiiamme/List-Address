import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import StateLists from './stateLists';
import Pagination from './pagination';
import RenderSearch from './renderSearch';


export default combineReducers({
    addresses: StateLists,
    form: formReducer,
    page: Pagination,
    keys: RenderSearch
})