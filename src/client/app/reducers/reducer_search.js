import {FETCH_SEARCH_RESULTS} from '../actions/searchAction';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SEARCH_RESULTS:
        console.log(action.payload);

            if(action.payload.data == undefined) {
                return [];
            }

            if(action.payload.status == 202) {
                return [];
            }

            return action.payload.data;

        default:
            return state;
    }
}