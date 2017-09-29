import { combineReducers } from 'redux';
import counter from './counter';
import usersList from './usersList';

const rootReducer = combineReducers({
    counter,
    usersList
});

export default rootReducer;
