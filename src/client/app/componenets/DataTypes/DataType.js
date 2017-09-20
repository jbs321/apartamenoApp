function DataType(data) {
    this.data = data;
    this.fields = [];
    this.missingFields = [];
    this.mandatoryFields = [];

    this.init = function () {
        if (!this.validate()) {
            throw new Error('Missing Fields: ' + this.missingFields.join(" ,"));
        }

        for (let i = 0; i < this.fields.length; i++) {
            let key   = this.fields[i];
            let value = this.data[key];

            //skip creation if no value exits in data set
            if (value !== undefined) {
                this.createGetterSetter(key, value);
            }
        }
    };

    this.createGetterSetter = function (key, value) {
        //create attribute in class
        this[key] = undefined;

        Object.defineProperty(this, key, {
            get: function () {
                return value;
            },
            set: function (value) {
                this.data[key] = value;
            }
        });
    };

    this.validate = function () {
        for (let i = 0; i < this.mandatoryFields.length; i++) {
            if (this.data[this.mandatoryFields[i]] === undefined) {
                this.missingFields.push(this.mandatoryFields[i]);
                return false;
            }
        }

        return true;
    };
}

export default DataType;