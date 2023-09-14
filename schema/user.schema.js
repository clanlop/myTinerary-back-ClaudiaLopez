import Joi from "joi"

export const createUserSchema=Joi.object({
    email:Joi.string()
    .required()
    .email({minDomainSegments:2
    }),
     password:Joi.string()
    .required()
    .min(8)
    .max(35)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .alphanum(),
    //.regex()si quiero que contenga carcateres especiales
    name:Joi.string()
    .required()
    .min(2)
    .max(50),
    //regex(si quiero solo caracteres alfabeticos)
    photo:Joi.string()
    .uri()

})