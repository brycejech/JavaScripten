'use strict';

// Safely access nested object properties

/*
    =====
    USAGE
    =====
    
    const val = safeAccess(obj, 'nested.property.path');
/*

if(module && module.exports) module.exports = safeAccess;

function safeAccess(obj, path){

    path = Object.prototype.toString.call(path) === '[object Array]'
        ? path
        : path.split('.');

    if(path.length > 1){
        const first = path.splice(0,1);

        if(obj.hasOwnProperty(first)){
            return valFromPath(obj[first], path);
        }
    }
    else{
        if(obj.hasOwnProperty(path[0])){
            return obj[path[0]];
        }
    }
}
