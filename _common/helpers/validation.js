import Joi from 'joi';

export const validateSignInData = (user) => Joi.validate(user, {
    email: Joi.string().min(5).max(255).required()
        .email(),
    password: Joi.string().min(5).max(10).required(),
}).error;

export const validateSignUpData = (user) => Joi.validate(user, {
    first_name: Joi.string().required(),
    last_name : Joi.string().required(),
    email     : Joi.string().min(5).max(255).required()
        .email(),
    password: Joi.string().min(5).max(10).required(),
}).error;
