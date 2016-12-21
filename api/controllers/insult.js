'use strict';

var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
 - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
 - Or the operationId associated with the operation in your Swagger document

 In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
 we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
    insult_get:insult_get
};

function insult_get(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var insult = 'random insult, man';
    res.json(insult);
}

function insult_post(req, res) {

}