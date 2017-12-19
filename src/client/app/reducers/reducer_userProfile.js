import {FETCH_USER_PROFILE} from '../actions/UserProfileAction';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER_PROFILE:
                return (action.payload) ? action.payload.data : false;
        default:
            return state;
    }
}