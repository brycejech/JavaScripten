'use strict';

function CustomError(message){
  this.message = message;
  this.stack   = (new Error()).stack;
}

// Ensure CustomError is instanceof Error
CustomError.prototype             =  Object.create(Error.prototype);

// Write the name and constructor props back to CustomError
// so that they aren't pointing to Error prototype
CustomError.prototype.name        = 'CustomError';
CustomError.prototype.constructor =  CustomError;
