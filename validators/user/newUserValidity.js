const Joi = require ('joi');
const { email } = require ('../../config/regex.enum');

module.exports = Joi.object ().keys ({
    name: Joi.string ().trim ().alphanum ().min (2).max (50).required (),
    email: Joi.string ().regex (email).max (50).required (),
    password: Joi.string ().trim ().min (8).required ()
});
