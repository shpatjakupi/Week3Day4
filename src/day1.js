/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Function Declaration
function add(n1, n2){
   return n1 +n2;
}
//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 
//Callback example

function mul(n1, n2){
  return n1 * n2;   
}


//Callback example
var cb = function(n1,n2, callback){
 
  try{
      if (typeof n1 === "number")
      {
          throw new error("wtf");
      }
      else if(typeof n2 === "number")
      {
          throw new error("wtf");
      }
      else if(typeof callback === "function")
      {
          throw new error("wtf");
      }
  }
  
  catch (e){
      console.error("errorMessage");
  }
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
   
};
//console.log( cb(3,3,add) ); // What will it print
//console.log( cb(4,3,sub) ); // What will it print
//console.log( cb(5,5,mul) );

var boys = ["messi", "ronaldo", "maradona", "van damm", "bruce lee", "bruce wayne", "howorang", "bo", "bob"];
var galacticos = boys.filter(word => word.length <= 3 );

txt ="";
boys.forEach(myFunction);

function myFunction(value, index){
    txt = txt + value;
   // console.log(txt);
}


//boys = boys.map(function(x) {return x.toUpperCase()})


function Html(name) {
    name = "<li>" + name + "</li>";
    return name;
}

function HtmlCode(names) {
    var map = names.map(Html);
    map.unshift("<ul>");
    map.push("</ul>");
    var string = map.join('');
    return string;
}
//console.log(HtmlCode(boys));


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//console.log(cars.filter(x => x.year > 1999));
//console.log(cars.filter(x => x.make === "Volvo"));
//console.log(cars.filter(x => x.price < 5000));

//var values = cars.map(x => "INSERT INTO cars (id, year, make, model, price)" +
//" VALUES (" + x.id + "," + x.year + "," + x.make + "," + x.model + "," + x.price + ");");
//values.join('\r');
//console.log(values);
 
 var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");


