import DataType from "./DataType";

function FeedData(data) {
    DataType.call(this, data);
    this.fields = ['id', 'created_at', 'content', 'user'];
    this.mandatoryFields = ['id', 'created_at', 'content'];
    this.init();
}

export default FeedData;
