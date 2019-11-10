'use strict';

var final = document.getElementById('store-table');

var storeHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function renderHours() {
  var tr = document.createElement('tr');
  var firstCell = document.createElement('th');
  firstCell.textContent = ' ';
  tr.append(firstCell);

  for (var index = 0; index < storeHours.length; index++) {
    var th = document.createElement('th');
    th.textContent = storeHours[index];
    tr.append(th);
  }
  var lastCell = document.createElement('th');
  lastCell.textContent = 'Daily Location Total';
  tr.append(lastCell);
  final.append(tr);
}

function Citylocation(name, min, max, avg) {
  this.name = name;
  this.minCus = min;
  this.maxCus = max;
  this.avgHour = avg;
  this.cookiePerhour = [];
  this.dailyTotal = 0;

  this.randomCustomer = function () {

    this.maxCus = Math.ceil(this.maxCus);
    this.minCus = Math.floor(this.minCus);
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
  };

  this.cookieSoldHour = function () {
    for (var k = 0; k < storeHours.length; k++) {
      var hold = Math.round(this.randomCustomer() * this.avgHour);
      this.cookiePerhour.push(hold);
      this.dailyTotal += hold;
    };

  };

  this.render = function (domReference) {
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.append(tdName);

    for (var index = 0; index < storeHours.length; index++) {
      var td = document.createElement('td');
      td.textContent = this.cookiePerhour[index];
      tr.append(td);
    }

    for (var index = 0; index < storeHours.length; index++)

      td = document.createElement('td');
    td.textContent = this.dailyTotal;
    tr.append(td);
    domReference.append(tr);
  };


};

//adding new data for City location
var seattle = new Citylocation('Seattle', 23, 65, 6.3);
var tokyo = new Citylocation('Tokyo', 3, 24, 1.2);
var dubai = new Citylocation('Dubai', 11, 38, 3.7);
var paris = new Citylocation('Paris', 20, 38, 2.3);
var lima = new Citylocation('Lima', 2, 16, 4.6);

var cityArray = [seattle, tokyo, dubai, paris, lima];


var renderTable = function () {
  renderHours();

  for (var index = 0; index < cityArray.length; index++) {
    cityArray[index].cookieSoldHour();
    cityArray[index].render(final);
  };

  //console.log(cityArray[1].cookiePerhour[0]);
  var sumTotal = [];
  for (index = 0; index < storeHours.length; index++) {
    var storeTotal = 0;
    for (var k = 0; k < cityArray.length; k++) {
      storeTotal = storeTotal + cityArray[k].cookiePerhour[index];
      //   console.log(cityArray[k].cookiePerhour[index]);    
      // sumTotal.push(storeTotal);
      // console.log(cityArray[k].cookiePerhour[index]);

    };
    sumTotal.push(storeTotal);
    //console.log(storeTotal);
    // console.log(sumTotal[2]);
  };
  // code to print last row
  function renderstoreTotal() {


    var tr = document.createElement('tr');
    var lastRow = document.createElement('th');
    lastRow.textContent = 'Totals';
    tr.append(lastRow);

    for (var index = 0; index < storeHours.length; index++) {
      var th = document.createElement('th');
      th.textContent = sumTotal[index];
      tr.append(th);
      final.append(tr);

    };
  };
  renderstoreTotal();
};
renderTable();

//event listener
var form = document.getElementById('store-form');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  alert(event.target.name.value);
  alert(event.target.weight.value);

  var newCitylocation = new Citylocation(event.target.location.value[1, 1, 1, 1], event.target.minimum.value, event.target.maximum.value, event.target.average.value);

  Citylocation.push(newCitylocation);

  // cleanTablerenderAll();
});


















