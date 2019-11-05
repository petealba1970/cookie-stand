'use strict';
var Seattle = {

    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,

}

var Tokyo = {

    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,

}

var Dubai = {

    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,

}
var Paris = {

    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,

}

var Lima = {

    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,

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
    //loop to go through data of each store per hour in the morning
    var StoreHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7]
    for (var EachHour = 0; EachHour < StoreHours.length; EachHour++) {
        function Customers() {
            currentLocation.min = Math.floor(currentLocation.min);
            currentLocation.max = Math.ceil(currentLocation.max);
            return Math.floor(Math.random() * (currentLocation.max - currentLocation.min + 1)) + currentLocation.min;

        }
        var customersPer = Customers();

        var cookiesHour = Math.round(customersPer * currentLocation.avg);

        var Hourstatement = document.createElement('li');
        var currentTime = StoreHours[EachHour];
        Hourstatement.textContent = currentTime + '   am   ' + cookiesHour + '  cookies.';
        StoreLocationDiv.append(Hourstatement);
        console.log(StoreHours[EachHour]);
        console.log(customersPer);


    }
    console.log(currentLocation.avg);
}
