import moment from 'moment';

class Actor {
    constructor(fname, lname, birthday, imbdLink, picture) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imbdLink = imbdLink;
        this.picture = picture;
        this.fullName = this.fname + " " + this.lname;
    }
    getAge() { 
        const age = moment().diff(moment(this.birthday, "DD/MM/YYYY"), 'years');
        return age;
    }
}

export default Actor;