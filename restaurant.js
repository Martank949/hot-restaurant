const uuid = require("uuid");

class Restaurant {
    constructor() {
        this.id = Math.random();
        this.max = 5;
        this.current = 0;
        this.reservations = [];
        this.waitList = [];
    }
    makeReservation(name, email, phone, id) {
        if (this.current === this.max) {
            this.addWaitlist(name, email, phone, id);
        } else {

            const id = uuid.v4();
            this.reservations.push({
                name: name,
                phone: phone,
                email: email,
                id
            });
            this.current++;
        }
    }
    unique(id) {
        //return this.reservations.map(r => r.id === id ? false : true)
        this.reservations.map(function(r) {
            if (r.id != id) {
                return false;
            }
        });
        return true;
    }

    //hello
    //console.log(id);
    //};
    // removeReservation(id) {
    //     this.reservations.map(function(reseravation, i) {
    //         if (reservation.id === id) {
    //             this.reservations.splice(i, 1);
    //             this.current--;
    //             if (this.waitList && waitList.length > 0) {
    //                 this.removeWaitlist(this.waitList[0].id);
    //                 this.makeReservation(this.waitList[0].name, this.waitList[0].email, this.waitList[0].phone, this.waitList[0].id);
    //             }
    //         }
    //     });
    // }

    addWaitlist(name, email, phone, id) {
        this.waitList.push({
            name: name,
            phone: phone,
            email: email,
            id: id
        });
    }
    removeWaitlist(id) {
        this.waitList.map(function(reseravation, i) {
            if (reservation.id === id) {
                this.waitList.splice(i, 1);
            }
        });
    }
}
module.exports = Restaurant;