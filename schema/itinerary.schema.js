import Joi from "joi"
export const createItinerarySchema=Joi.object({
    excursion:Joi.string() 
    .required(),
    price:Joi.number ()
    .integer()
    .required(),
    duration:Joi.number() 
    .integer(),
   
    hashtags: Joi.string()
    .required(),
    like: Joi.number()
    .integer()
    .required(),
    comments: Joi.string(), 
    activity1:Joi.string(),
    activity2:Joi.string(),
    activity3:Joi.string(),
    description1:Joi.string(),
    description2:Joi.string(),
    description3:Joi.string()
    
})
