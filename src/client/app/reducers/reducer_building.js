import {FETCH_TOP_BUILDINGS} from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TOP_BUILDINGS:
            if(action.payload.data == undefined) {
                return [];
            }
            return action.payload.data;
        default:
            return state;
    }
}