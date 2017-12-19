import {FETCH_FEEDS} from '../actions/feeds';
import FeedData from "../componenets/DataTypes/FeedData";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_FEEDS:
            if(action.payload.data == undefined) {
                return [];
            }

            action.payload.data.data = action.payload.data.data.map(feed => {
                return new FeedData(feed);
            });

            return action.payload.data;

        default:
            return state;
    }
}