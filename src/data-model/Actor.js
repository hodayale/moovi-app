class Actor {
    constructor(fname, lname, birthday, imbdLink, picture) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imbdLink = imbdLink;
        this.picture = picture;
    }
    getAge() {
        moment(this.birthday, "DD/MM/YYYY").fromNow();
    }
}