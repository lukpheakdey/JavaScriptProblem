var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Pheakdey',
    getPricePerSquareFoot: function() {
        return this.price / this.squareFeet;
    }
};
   
console.log(house.price);
console.log(house.getPricePerSquareFoot());