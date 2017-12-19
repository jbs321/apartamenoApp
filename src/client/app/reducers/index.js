import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import BuildingReducer from './reducer_building';
import AuthReducer from './reducer_authentication';
import UserProfile from './reducer_userProfile';
import UserBuilding from './reducer_userBuilding';
import FeedsReducer from './reducer_feeds';
import search from './reducer_search';


const rootReducer = combineReducers({
    form: formReducer,
    user: UserProfile,
    search: search
    // feeds: FeedsReducer,
    // topBuildings: BuildingReducer,
});

export default rootReducer;