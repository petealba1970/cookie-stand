
'use strict';
// //


// var Seattle = {

//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
// }

// var Tokyo = {

//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
// }

// var Dubai = {

//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,

// }
// var Paris = {

//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,

// }

// var Lima = {

//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6



// }

var storeHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00     am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', 'Daily Location Total'];
// variable storing array of location and the table

var storeCity = [];
var storeTable = document.getElementById('store-table');

//Constructor function for the different stores
function Citylocation(name, min, max, avg) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgSales = avgSales;
    this.avgCushour = 0;

    this.avgSalesHour = 0;
    this.cusArray = [];
    this.cookiesArr = [];
    this.allCookies = 0;

    //Random customers per hour generated

    this.randomCustomer = function () {
        for (var index = 0; index < storeHours.length; index++) {
            this.custArr = Math.ceil(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
            this.cusArr.push(this.avgCusHour)
        }
    };
    this.avgCookiesHour = function () {
        for (var index = 0; index < this.cusArr.length; index++) {
            this.avgSalesHour = Math.ceil(this.cusArr[index] * this.avgSales);
            this.cookiesArr.push
                (this.avgSalesHour);
        }
        this.totalCooksales = function () {
            this.allCookies = this.cookiesArr.reduce(function (a, b) {
                return a + b;
            }, 0);
        };

        this.totalHours = function () {
            this.hourTotal = this.hourSaleArr.map(function (a, b) {
                return a + b;
            }, 0);
        };
        this.randomCustomer();
        this.avgCookiesHour();
        this.totalCooksales();
        storeCity.push(this);

        //creating new objects with data
    }
    new Citylocation('Seattle', 23, 65, 6.3);
    new Citylocation('Tokyo', 3, 24, 1.2);
    new Citylocation('Dubai', 11, 38, 3.7);
    new Citylocation('Paris', 20, 38, 2.3);
    new Citylocation('Lima', 2, 16, 4.6);

    //rendering table header and content
    Citylocation.prototype.render = function () {
        var tableGo = document.createElement('tr');
        var headerGo = document.createElement('td');
        headerGo.textContent = this.name;
        tableGo.appendChild(headerGo);

        // looping the hours to creat elements
        for (var index = 0; index < storeHours.length; index++) {
            headerGo = document.createElement('td');
            headerGo.textContent = this.cookiesArr[index];
            tableGo.appendChild(headerGo);
        }
        headerGo = document.createElement('td');
        headerGo.textContent = this.allCookies;
        tableGo.appendChild(headerGo);
        storeTable.appendChild(tableGo);
    }

    function fullRender() {
        for (var index in storeCity) {
            storeCity[index].render();
        }
    };
    function headerCreate() {
        var tableGo = document.createElement('tr');
        var city = document.createElement('th');
        city.textContent = 'store-city';
        tableGo.appendChild(city);
        for (var index = 0; index < storeHours.length; index++) {
            city = document.createElement('th');
            city.textContent = hours[index];
            tableGo.appendChild(city);
        };
        city = document.createElement('th');
        city.textContent = 'Total';
        tableGo.appendChild(city);
        storeTable.appendChild(tableGo);
    }

    // calling my functions to render
    headerCreate();
    fullRender();





    // this.render = function (domReference) {
    //     // -  - A an anchor to the dom, that I can use to render things

    //     var tr = document.createElement('tr');
    //     var tdName = document.createElement('td');
    //     tdName.textContent = this.name;
    //     tr.append(tdName);


    //     var StoreLocationDiv = document.getElementById('Store-Location');
    //     var cookiesSoldDul = document.getElementById('Cookies-sold');
    //     var totalCookiesDay = document.getElementById('total-Cookies');
    //     //
    //     //Creating arrays to store data for each store location
    //     var storeNow = [Seattle, Tokyo, Dubai, Paris, Lima];

    //     for (var storeIndex = 0; storeIndex < storeNow.length; storeIndex++) {
    //         var td = document.createElement('td');
    //         var currentLocation = storeNow[storeIndex];
    //         var dayTotal = 0;

    //         // var currentLocation = storeNow[storeIndex];

    //         td.textContent = this.storeNow[storeIndex];
    //         tr.append(td);


    //         td = document.createElement('td');

    //         td.textContent = 'total';
    //         tr.append(td);

    //         domReference.append(tr);


    //         function calculateTotals(StoreNow) {

    //             function renderTimesofDay(domReference) {
    //                 var tr = document.createElement('tr');

    //             }

    //             for (var EachHour = 0; EachHour < StoreHours.length; EachHour++) {
    //                 function Customers() {
    //                     currentLocation.min = Math.floor(currentLocation.min);
    //                    currentLocation.max = Math.ceil(currentLocation.max);
    //                     return Math.floor(Math.random() * (currentLocation.max -   currentLocation.min + 1)) + currentLocation.min;

    //                     var th = document.createElement('th');
    //                     th.textContent = daysOfTheWeek[day];
    //                     tr.append(th);
    //                 }
    //                 domReference.append(tr);
    //                 //turn these lines into a function
    //                 var customersPer = Customers();

    //                 var cookiesHour = Math.round(customersPer * currentLocation.avg);
    //                 var addTotal = cookiesHour + dayTotal;

    //                 dayTotal = addTotal;
    //                 var Hourstatement = document.createElement('tr');
    //                 var currentTime = StoreHours[EachHour];

    //                 Hourstatement.textContent = currentTime + '   :    ' + cookiesHour + '      cookies.';

    //                 StoreLocationDiv.append(Hourstatement);
    //                 //var dayTally = document.createElement('div');


    //             }

    //             // Connect to the table

    //             var tableReference = document.getElementById('store-table');

    //             // DAYS
    //             renderDaysOfTheWeek(tableReference);

    //             //ANIMALS
    //             for (var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
    //                 var currentAnimal = animals[animalIndex];

    //                 currentAnimal.render(tableReference);
    //             }

    //             var dayTally = document.createElement('div')
    //             dayTally.textContent = 'Total:   ' + dayTotal + '   cookies';
    //             StoreLocationDiv.append(dayTally);
    //             console.log(dayTotal)
