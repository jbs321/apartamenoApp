import {Rate} from "../../Rating/Rate";
import {
    DATA_SET_KEYS,
    KEY_ID,
    KEY_RATINGS,
    KEY_ADDRESS,
    KEY_COMMENTS,
    KEY_IMAGE_SRC,
    MANDATORY_FIELDS,
    KEY_GOOGLE_PLACE_ID,
} from '../Variables';

export class BuildingData {
    constructor(address) {
        this.address = address;
    }

    static createFromDataSet(dataSet) {
        // console.log('call');
        if (!dataSet instanceof Object || dataSet instanceof Array) {
            throw new Error("dataSet is invalid");
        }

        MANDATORY_FIELDS.forEach((current) => {
            if (dataSet[current] === undefined) {
                throw new Error("missing key in data set: " + current);
            }
        });

        let newBuilding = new BuildingData(dataSet[KEY_ADDRESS]);

        newBuilding.id = dataSet[KEY_ID];
        newBuilding.ratings = dataSet[KEY_RATINGS];
        newBuilding.comments = dataSet[KEY_COMMENTS];
        // newBuilding.imgSrc = dataSet[KEY_IMAGE_SRC];

        return newBuilding;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get imgSrc() {
        return this._imgSrc;
    }

    set imgSrc(value) {
        this._imgSrc = value;
    }

    get ratings() {
        console.log( this._ratings);
        return this._ratings;
    }

    set ratings(value) {
        this._ratings = [];

        if(value === undefined) {
            return this._ratings;
        }

        if (!value instanceof Array) {
            throw new Error("Wrong type for Rate");
        }

        if(value.length > 0) {
            this._ratings = value.map((rate) => {
                return Rate.createFromDataSet(rate);
            });
        }

        return this._ratings;
    }

    get google_place_id() {
        return this._google_place_id;
    }

    set google_place_id(value) {
        this._google_place_id = value;
    }

    get comments() {
        if(value === undefined) {
            this._ratings = [];
        }

        if (!value instanceof Array) {
            throw new Error("Comments have to be of type Array");
        }

        return this._comments;
    }

    set comments(value) {
        this._comments = value;
    }
}