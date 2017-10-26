import {combineReducers} from 'redux';
import UserReducers from './reducer-user';
import SelectedUSer from './reducer-activeUser';
const AllReducers = combineReducers({
    users : UserReducers,
    activeUser : SelectedUSer
});

export default AllReducers;