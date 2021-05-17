
// const nanoid = require("nanoid");  1вариант то a.push(nanoid.nanoid());
// const {nanoid} = require("nanoid"); 2вариант 
import { defaults } from "lodash";
import {nanoid} from "nanoid";  // новый синтексис написания кода в ES6

// function getRandomIdArray(){
//     const a = [];
    
//     for (let i = 0; i < 10; i++){
//         a.push(nanoid()); если так то const {nanoid} = require("nanoid"); 
//     }
//     return a;
// }

 const getRandomIdArray = () => {  //  стрелочная функция
    const a = [];
    
    for (let i = 0; i < 10; i++) {
        a.push(nanoid());
    }
    return a;
}

// (1 вариант) module.exports.getRandomIdArray = getArrayOfRandomIds;

// (2 вариант) module.exports = getArrayOfRandomIds; если пишем так то  const getRandomIdArray = require ("./helpers") без скобок {getRandomIdArray}

//(3 вариант) превратим его в объект тлгдв не надо переменовывать getArrayOfRandomIds
//             module.exports {
//              (ключ)getRandomIdArray  :(значения) getRandomIdArray,
//              getRandomIdArray, (если название совпадает то пишем сокрощенно 
//              
//           };


const getRandomIdArrayByLength = (length) => {
    const a = [];
    
    for (let i = 0; i < length; i++) {
        a.push(nanoid());
    }
    return a;
}
// 1 способ экспортировать
// const helpers = {
//     getRandomIdArray,
//     getRandomIdArrayByLength,
// }
// export default helpers;

// 2 способ экспортировать
export {                  // (3 вариант) но новый синтексис написания кода в ES6 
    getRandomIdArray,
    getRandomIdArrayByLength,
};
     
// function a() { }    

// const a = function() { }
// a();