const { Room, Booking } = require('./index.js');

describe('Room occupancy giving a certain date', () => {
    test('should return that the room is available', () => {
        const bookingOne = new Booking("pepe", "pepe@pepe.com", new Date("11/10/2022"), new Date("11/13/2022"), 45);
        const bookingTwo = new Booking("pepe", "pepe@pepe.com", new Date("11/16/2022"), new Date("11/19/2022"), 45);
        const bookingThree = new Booking("pepe", "pepe@pepe.com", new Date("11/22/2022"), new Date("11/23/2022"), 45);

        const room1 = new Room("Suite", [bookingOne, bookingTwo, bookingThree], 3450, 25);
        expect(room1.isOccupied(new Date("11/9/2022"))).toBe(false);
    })

    test('sould return that the room is occupied', () => {
        const bookingOne = new Booking("pepe", "pepe@pepe.com", new Date("11/10/2022"), new Date("11/13/2022"), 45);
        const bookingTwo = new Booking("pepe", "pepe@pepe.com", new Date("11/16/2022"), new Date("11/19/2022"), 45);
        const bookingThree = new Booking("pepe", "pepe@pepe.com", new Date("11/22/2022"), new Date("11/23/2022"), 45);

        const room2 = new Room("Suite", [bookingOne, bookingTwo, bookingThree], 3500, 35);
        expect(room2.isOccupied(new Date("11/18/2022"))).toBe(true);
    })
})

describe('Room occupancy percentage giving certain dates', () => {
    test('should return 0% occupancy', () => {
        expect().toBe(0);
    })

    test('should return the actual percentage of occupancy', () => {
        expect().toBe();
    })

    test('should return that is 100% occupied', () => {
        expect().toBe(100);
    })
})

describe('Get the fee of the booking that has been made', () => {
    test('should return that it is no fee', () => {
        expect().toBe(false);
    })

    test('should return the actual fee of the booking', () => {
        expect().toBe();
    })
})