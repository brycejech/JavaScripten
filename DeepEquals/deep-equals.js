'use strict';

/*
    Compares 2 items for deep eqality.
    
    Checks that all members of 'first' are
    present and equal in 'second'. Does not
    check that all members of 'second' are
    present and equal in 'first'
*/

const deepEq = (function(){

    function deepEq(first, second){

        if(_getType(first) !== _getType(second)) return false;
        if(first === second) return true;

        // first item is array
        if(_getType(first) === 'array'){
            for(let i = 0, len = first.length; i < len; i++){
                if(!deepEq(first[i], second[i])){
                    return false;
                }
            }
            return true;
        }

        // first item is object
        else if(_getType(first) === 'object'){
            for(let prop in first){
                if(!deepEq(first[prop], second[prop])){
                    return false;
                }
            }
            return true;
        }

        else if(_getType(first) === 'number'){
            if(isNaN(first) && isNaN(second)) return true;
            return false;
        }
    }

    function _getType(thing){
        return Object.prototype.toString.call(thing).match(/\[object (.*)\]/)[1].toLowerCase();
    }

    return deepEq

})();

if(module && module.exports) module.exports = deepEq;
