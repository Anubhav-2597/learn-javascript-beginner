//factory function

const address = createAddress('407-Tilak Nagar', 'Indore', 452018);

console.log(address);

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
    
}

//constructor function
let address1 = new Address1('5B Krishi Vihar Colony', 'Indore', 452019);
console.log(address1);

function Address1(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}