/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];


var all = [boys, girls];
all = all.concat(boys,girls);
all.push('john' , 'wayne');
all.unshift('howorang', 'bruce lee');
//all.shift();
//all.pop();
//all.slice(2,3);
var all2 = all.map(function(item) { return item.toUpperCase(); });
