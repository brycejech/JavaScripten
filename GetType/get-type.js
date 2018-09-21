'use strict';

function getType(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*)\]/)[1].toLowerCase();
}

/*
    ==============
    STATIC METHODS
    ==============
*/
getType.isObject = function isObject(thing){
    return getType(thing) === 'object';
}

getType.isArray = function isArray(thing){
    if(typeof Array.isArray === 'function'){
        return Array.isArray(thing);
    }
    return getType(thing) === 'array';
}

getType.isString = function isString(thing){
    return getType(thing) === 'string';
}

getType.isNumber = function isNumber(thing){
    return getType(thing) === 'number';
}

getType.isNaN = isNaN;

getType.isNull = function isNull(thing){
    return getType(thing) === 'null';
}

getType.isUndefined = function isUndefined(thing){
    return getType(thing) === 'undefined';
}

getType.isBoolean = function isBoolean(thing){
    return getType(thing) === 'boolean';
}

if(module && module.exports) module.exports = getType;
