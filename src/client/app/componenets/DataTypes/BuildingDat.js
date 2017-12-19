import DataType from "./DataType";

function BuildingDat(data) {
    DataType.call(this, data);
    this.fields = [
        'id',
        'created_at',
        'address',
        'imgSrc',
        'ratings',
        'google_place_id',
        'comments',
        'lng',
        'lat',
    ];

    this.mandatoryFields = [
        'id',
        'created_at',
        'address',
        'google_place_id',
        'lng',
        'lat',
    ];

    this.init();
}

export default BuildingDat;
