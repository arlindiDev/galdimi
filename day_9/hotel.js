class Hotel {

    constructor(name, totalApartments, bookedApartments, apartmentTypes) {
        this.name = name;
        this.totalApartments = totalApartments;
        this.bookedApartments = bookedApartments;
        this.apartmentTypes = apartmentTypes;

    }

    checkAvailability() {
        return this.totalApartments - this.bookedApartments; // 
    }
}

class Apartment {
    constructor(emriApartmentit) {
        this.emriApartmentit = emriApartmentit
        this.rezervimi = []
    }
}

var apartment1 = new Hotel('Prishtina', 8, 3, '2 Bedroom, 1 Bedroom'); // instance e objektit Hotel 
var apartment2 = new Hotel('Prizreni', 5, 2, '1 Bedroom');

console.log(apartment1.name);
console.log(apartment1.apartmentTypes)
console.log('We have ' + apartment1.checkAvailability() + ' more free apartments. ');