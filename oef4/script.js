"use strict";

let firstName="Man";
let secondName="Vrouw";

let firstLength=1.80;
let secondLength=1.60;

let firstWeight=70;
let secondWeight=55;
let BMI1=(firstWeight/(firstLength^2)).toFixed(0);
let BMI2=secondWeight/(secondLength^2);

console.log("Bmi van "+firstName+" is: "+BMI1);