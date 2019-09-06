/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getElem = document.getElementsByTagName("div");

for (var i = 0; i < getElem.length; i++) {
    console.log(getElem[i])
    getElem[i].style.backgroundColor = "yellow";
}


var opgb = function () {
    document.getElementById(1).style.color = "grey";
    document.getElementById(2).style.color = "black";
    document.getElementById(3).style.color = "green";
    
};
var button = document.getElementById("btn");
button.onclick = opgb();