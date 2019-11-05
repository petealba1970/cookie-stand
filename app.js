'use strict';
var Seattle = {

    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    customers: function () {
        this.min = Math.floor(this.min);
        this.max = Math.ceil(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}
var Tokyo = {

    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    customers: function () {
        this.min = Math.floor(this.min);
        this.max = Math.ceil(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}

var Dubai = {

    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    customers: function () {
        this.min = Math.floor(this.min);
        this.max = Math.ceil(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}
var Paris = {

    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    customers: function () {
        this.min = Math.floor(this.min);
        this.max = Math.ceil(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}

var Lima = {

    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    customers: function () {
        this.min = Math.floor(this.min);
        this.max = Math.ceil(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    },
    cookiesSoldperHour: function () {
        return this.customers() * this.avg
    }
}
var StoreLocationDiv = document.getElementById('StoreLocation')
var cookiesSoldDul = document.getElementById('Cookiessold')

//Creating arrays to store data for each store location

var storeNow = [Seattle, Tokyo, Dubai, Paris, Lima];

for (var storeIndex = 0; storeIndex < storeNow.length; storeIndex++) {
    var paragraph = document.createElement('p');
    var currentLocation = storeNow[storeIndex];
    paragraph.textContent = currentLocation.name;
    StoreLocationDiv.append(paragraph);
    console.log(storeNow);
    //loop to go through data of each store per hour in the morning
    var StoreHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7]
    for (var EachHour = 0; EachHour < StoreHours.length; EachHour++) {
        var Hourstatement = document.createElement('li');
        StoreLocationDiv.append(Hourstatement);



    }
}
// for (var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
//     var paragrah = document.createElement('p');
//     var currentAnimal = animals[animalIndex];
//     paragrah.textContent = currentAnimal.name;

//     dogDataDiv.append(paragrah);

//     for (var barkIndex = 0; barkIndex < currentAnimal.barksPerWeek.length; barkIndex++) {
//         // Invarint - currentAnimal will NOT CHANGE inside this loop
//         // invariant - barkIndex will CHANGE inside this loop 

//         var barkParagraph = document.createElement('p');
//         barkParagraph.textContent = currentAnimal.barksPerWeek[barkIndex];
//         dogDataDiv.append(barkParagraph);