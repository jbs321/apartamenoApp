export class ProfileData {
    _first_name;
    _last_name;
    _email;
    _profileImg;

    constructor() {
        this.profileImg = "/public/img/profileImg.png";
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get profileImg() {
        return this._profileImg;
    }

    set profileImg(value) {
        this._profileImg = value;
    }
}