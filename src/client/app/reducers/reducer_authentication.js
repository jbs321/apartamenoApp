import {IS_AUTHENTICATE} from '../actions/Auth';

export default function (state = false, action) {
    switch (action.type) {
        case IS_AUTHENTICATE:
            return action.payload;
        default:
            return state;
    }
}