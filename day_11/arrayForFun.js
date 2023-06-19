// array initialization

var hotel = new Object();

hotel.name = 'Prishtina';
hotel.rooms = 8;
hotel.booked = 5;

checkAvailability() ;{
    return this.rooms - this.booked
}

hotel.checkAvailability();