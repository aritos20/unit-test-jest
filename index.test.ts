const { Room, Booking } = require("./index");

describe('Room occupancy giving a certain date', () => {
    test('should return that the room is available', () => {
        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 45});

        const bookingTwo = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/16/2022"),
        checkOut: new Date("11/19/2022"),
        discount: 45});

        const bookingThree = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/22/2022"),
        checkOut: new Date("11/23/2022"),
        discount: 45});

        const room1 = new Room({
        name: "Suite",
        bookings: [bookingOne, bookingTwo, bookingThree],
        rate: 3450,
        discount: 25});

        expect(room1.isOccupied(new Date("11/9/2022"))).toBe(false);
    })

    test('sould return that the room is occupied', () => {
        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 45});

        const bookingTwo = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/16/2022"),
        checkOut: new Date("11/19/2022"),
        discount: 45});

        const bookingThree = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/22/2022"),
        checkOut: new Date("11/23/2022"),
        discount: 45});

        const room2 = new Room({
        name: "Suite",
        bookings: [bookingOne, bookingTwo, bookingThree],
        rate: 3500,
        discount: 35});

        expect(room2.isOccupied(new Date("11/18/2022"))).toBe(true);
    })
})

describe('Room occupancy percentage giving certain dates', () => {
    test('the start date is after or equal to the end date', () => {
        const room3 = new Room({
        name: "Suite",
        bookings: [],
        rate: 3500,
        discount: 35});

        expect(room3.occupancyPercentage(new Date("11/14/2022"), new Date("11/12/2022"))).toBe(false);
    })

    test('should return 0% occupancy', () => {
        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 45});

        const bookingTwo = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/16/2022"),
        checkOut: new Date("11/19/2022"),
        discount: 45});

        const bookingThree = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/22/2022"),
        checkOut: new Date("11/23/2022"),
        discount: 45});

        const room4 = new Room({
        name: "Suite",
        bookings: [bookingOne, bookingTwo, bookingThree],
        rate: 3500,
        discount: 35});

        expect(room4.occupancyPercentage(new Date("10/8/2022"), new Date("10/16/2022"))).toBe(0);
    })

    test('should return the actual percentage of occupancy', () => {
        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 45});

        const bookingTwo = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/16/2022"),
        checkOut: new Date("11/19/2022"),
        discount: 45});

        const bookingThree = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/22/2022"),
        checkOut: new Date("11/23/2022"),
        discount: 45});

        const room5 = new Room({
        name: "Suite",
        bookings: [bookingOne, bookingTwo, bookingThree],
        rate: 3500,
        discount: 35});

        expect(room5.occupancyPercentage(new Date("11/8/2022"), new Date("11/24/2022"))).toBeGreaterThanOrEqual(1);
    })

    test('should return that is 100% occupied', () => {
        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 45});

        const bookingTwo = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/16/2022"),
        checkOut: new Date("11/19/2022"),
        discount: 45});

        const bookingThree = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/22/2022"),
        checkOut: new Date("11/23/2022"),
        discount: 45});

        const room6 = new Room({
        name: "Suite",
        bookings: [bookingOne, bookingTwo, bookingThree],
        rate: 3500,
        discount: 35});

        expect(room6.occupancyPercentage(new Date("11/10/2022"), new Date("11/13/2022"))).toBe(100);
    })
})

describe('Get the fee of the booking that has been made', () => {
    test('should return that it is no fee', () => {
        const room6 = new Room({
        name: "Suite",
        bookings: [],
        rate: 3500,
        discount: 0});

        const bookingOne = new Booking({
        name: "pepe",
        email: "pepe@pepe.com",
        checkIn: new Date("11/10/2022"),
        checkOut: new Date("11/13/2022"),
        discount: 0,
        room: room6});

        expect(bookingOne.fee).toBeLessThanOrEqual(0);
    })

    test('should return the actual fee of the booking', () => {
        const room6 = new Room({
        name: "Suite",
        bookings: [],
        rate: 3500,
        discount: 7});

        const bookingOne = new Booking({
            name: "pepe",
            email: "pepe@pepe.com",
            checkIn: new Date("11/10/2022"),
            checkOut: new Date("11/13/2022"),
            discount: 13,
            room: room6});

        expect(bookingOne.fee).toBeGreaterThanOrEqual(0.1);
    })
})