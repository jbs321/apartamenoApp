function DataType(data) {
    this.data = data;
    this.fields = [];
    this.mandatoryFields = [];
    this.init = function () {
        if (!this.validate()) {
            throw new Error('Wrong Data Set');
        }

        for (let i = 0; i < this.fields.length; i++) {
            let key   = this.fields[i];

            if(this.data[key] === undefined) {
                continue;
            }

            this[key] = undefined;
            if (this.data[key] !== undefined) {
                Object.defineProperty(this, key, {
                    get: function () {
                        return this.data[key];
                    },
                    set: function (value) {
                        this.data[key] = value;
                    }
                });
            }
        }
    };

    this.validate = function () {
        for (let i = 0; i < this.mandatoryFields.length; i++) {
            if (this.data[this.mandatoryFields[i]] == undefined) return false;
        }

        return true;
    };
}

export default DataType;