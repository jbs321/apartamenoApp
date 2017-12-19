import {FETCH_USER_BUILDING} from '../actions/userBuilding';
import BuildingDat from "../componenets/DataTypes/BuildingDat";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER_BUILDING:
            // const building = action.payload.data;
            let buildingData;
            let regBuilding = localStorage.getItem('regBuilding');

            if (regBuilding !== undefined && regBuilding !== null) {
                buildingData = new BuildingDat(JSON.parse(localStorage.getItem('regBuilding')));
            } else {
                buildingData = new BuildingDat(action.payload.data);
            }

            return buildingData;

        default:
            return state;
    }
}