// var generateName = require('sillyname');

import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

var superheroes = randomSuperhero();

console.log(`I am ${superheroes}.`);