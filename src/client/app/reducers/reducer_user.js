import {REGISTER_USER} from '../actions/UserAction';

export default function (state = [], action) {
    switch (action.type) {
        case REGISTER_USER:
            if(action.payload.status == 200) {
                return action.payload.data;
            }

            return state;
        default:
            return state;
    }
}