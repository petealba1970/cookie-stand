
'use strict';

// variable storing array of location and the table

//Constructor function for the different stores
function Citylocation(name, min, max, avg) {
    this.name = name;
    this.minCus = min;
    this.maxCus = max;
    this.avgHour = avg;
    // console.log;
    //Anchor to the dom

    this.render = function (domReference) {

        var tr =
            document.createElement('tr');

        var tdName =
            document.createElement('td');

        tdName.textContent = this.name;
        tr.append(tdName);

        //cookies per hour


        for (var index = 0; index < storeHours.length; index++) {
            var td = document.createElement('td');
            tr.textContent = this.storeHours[index];
            tr.append('td');

        }

        td = document.createElement('td');

        tdName.textContent = 'total';
        tr.append(td);

        domReference.append(tr);

    }
}
//Random customers per hour created by functiom

this.randomCustomer = function () {
    this.maxCus = Math.ceil(max)
    this.minCus = Math.floor(min)
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;

};


// //generating cookies per hour 
this.avgCookiesHour = function () {
    this.avgSalesHour = Math.ceil(this.randomCustomer * this.avgHour);
}


// need to create a loop within a loop to get total cookie sales per hour

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


    var storeHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00     am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', 'Daily Location Total'];

    // looping the hours to create lements
    for (var index = 0; index < storeHours.length; index++) {
        headerGo = document.createElement('td');
        headerGo.textContent = this.cookiesArr[index];
        tableGo.appendChild(headerGo);
    }
    //     //updating table
    //     headerGo = document.createElement('td');
    //     headerGo.textContent = this.allCookies;
    //     tableGo.appendChild(headerGo);
    //     storeTable.appendChild(tableGo);
    // }
    // //updating table with city
    // function fullRender() {
    //     for (var index in storeCity) {
    //         storeCity[index].render();
    //     }
    // };
    // // updating table content
    // function headerCreate() {
    //     var tableGo = document.createElement('tr');
    //     var city = document.createElement('th');
    //     city.textContent = 'store-city';
    //     tableGo.appendChild(city);
    //     for (var index = 0; index < storeHours.length; index++) {
    //         city = document.createElement('th');
    //         city.textContent = hours[index];
    //         tableGo.appendChild(city);
    //     };


    //     city = document.createElement('th');
    //     city.textContent = 'Total';
    //     tableGo.appendChild(city);
    //     storeTable.appendChild(tableGo);
    // }

    // // calling my functions to render
    // headerCreate();
    // fullRender();
}
