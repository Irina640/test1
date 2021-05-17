// const {} = require("lodash");

 import {chunk} from "lodash";// новый синтексис написания кода в ES6 при подключения webpack
//  node.js не знает об import поэтому подключаем  loader: 'babel-loader',

// const helpers = require ("./helpers") то const myArr = helpers. getRandomIdArray();
// const {getRandomIdArray} = require ("./helpers") 

import { getRandomIdArray, getRandomIdArrayByLength } from "./helpers";

const myArr = getRandomIdArray();
const result = chunk(myArr, 3);
// const result = _.chunk(myArr, 3);


const myArr2 = getRandomIdArrayByLength(5);
const result2 = chunk(myArr2, 2);

console.log(result,result2);

