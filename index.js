class Room {
    constructor(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date) {
        let occupied = false

        this.bookings.forEach(booking => {
            if (date.getTime() >= booking.checkIn.getTime() && date.getTime() <= booking.checkOut.getTime()) {
                occupied = true;
            }
        })
        return occupied;
    }

    occupancyPercentage(startDate, endDate) {
        let differenceDates = Math.abs(startDate.getTime() - endDate.getTime());
        let percentage = 0;

        if (startDate.getTime() >= endDate.getTime()) {
            return false;
        }

        this.bookings.forEach(booking => {
            if (booking.checkIn.getTime() >= startDate.getTime() && booking.checkOut.getTime() <= endDate.getTime()) {
                percentage += Math.abs(booking.checkIn.getTime() - booking.checkOut.getTime());
            }
        })

        return percentage === 0 ? percentage : Number(((percentage * 100) / differenceDates).toFixed(0)) ;
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {

    }

    static availableRooms(rooms, startDate, endDate) {

    }
}

class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    get fee() {
        return this.room.discount + this.discount;
    }
}

module.exports = { Room, Booking };