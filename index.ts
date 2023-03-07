interface RoomInput {
    name: string;
    bookings: Array<Booking>;
    rate: number;
    discount: number;
}

interface BookingInput {
    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room?: Room;
}

class Room {
    name: string;
    bookings: Array<Booking>;
    rate: number;
    discount: number;

    constructor(roomInput: RoomInput) {
        this.name = roomInput.name;
        this.bookings = roomInput.bookings;
        this.rate = roomInput.rate;
        this.discount = roomInput.discount;
    }

    isOccupied(date: Date): Boolean {
        let occupied = false

        this.bookings.forEach(booking => {
            if (date.getTime() >= booking.checkIn.getTime() && date.getTime() <= booking.checkOut.getTime()) {
                occupied = true;
            }
        })
        return occupied;
    }

    occupancyPercentage(startDate, endDate): number | Boolean {
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
}

class Booking {
    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room?: Room;

    constructor(bookingInput: BookingInput) {
        this.name = bookingInput.name;
        this.email = bookingInput.email;
        this.checkIn = bookingInput.checkIn;
        this.checkOut = bookingInput.checkOut;
        this.discount = bookingInput.discount;
        this.room = bookingInput.room;
    }

    get fee(): number {
        return this.room ? this.room.discount + this.discount : 0;
    }
}

export { Room, Booking };