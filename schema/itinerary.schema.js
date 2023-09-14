import Joi from "joi"
export const createItinerarySchema=Joi.object({
    excursion:Joi.string() 
    .required(),
    price:Joi.number ()
    .integer()
    .required(),
    duration:Joi.number() 
    .integer()
    .required(),
    hashtags: Joi.string()
    .required(),
    like: Joi.number()
    .integer()
    .required(),
    comments: Joi.string() 
    .required()
    
})
