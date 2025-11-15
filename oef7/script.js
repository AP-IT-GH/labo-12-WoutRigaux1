"use strict";

let duration=7;
let beginAmount=100;
let interest=2;

let totalAmount= (beginAmount*((1+interest/100)**duration));
console.log("totaalbedrag: "+totalAmount);
