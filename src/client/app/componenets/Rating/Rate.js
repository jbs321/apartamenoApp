import {DATA_SET_KEYS, KEY_VALUE, KEY_LABEL, KEY_ID } from './Variables.js';

export class Rate {
    constructor(id, label, value, readOnly = true) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.readOnly = readOnly;
    }


    static createFromDataSet(dataSet, readOnly = true) {
        if (!dataSet instanceof Object || dataSet instanceof Array) {
            throw new Error("dataSet is invalid");
        }

        for (let i = 0; i < DATA_SET_KEYS.length; i++) {
            console.log(dataSet[DATA_SET_KEYS[i]]);
            if (dataSet[DATA_SET_KEYS[i]] === undefined) {
                throw new Error("missing key in data set: " + DATA_SET_KEYS[i]);
            }
        }

        return new Rate(dataSet[KEY_ID], dataSet[KEY_LABEL], dataSet[KEY_VALUE], readOnly);
    }

    get id() {
        return this._id;
    }

    set id(value) {
        if (value === undefined) {
            throw new Error('Invalid data');
        }
        this._id = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        if (value === undefined) {
            throw new Error('Invalid data');
        }
        this._label = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (value === undefined) {
            throw new Error('Invalid data');
        }
        this._value = value;
    }

    get readOnly() {
        return this._readOnly;
    }

    set readOnly(value) {
        if (value === undefined) {
            throw new Error('Invalid data');
        }
        this._readOnly = value;
    }
}