
import { Schema, model, Types } from "mongoose";
let collection = 'users';

let schema = new Schema({
    name:{ type: String, required: true},
    lastName:{type:String},
    email: { type: String, required: true,unique:true},
    password:{type: String, required: true},
    photo: { type: String},
    country:{type:String},
    role:{type: String},
    online:{type: Boolean, default: false},
    google:{type:Boolean,default:false},
    verified:{type:Boolean,default:true},
    verified_code:{type:String}
    
},
{
    timestamps: true
}
)
const User = model(collection, schema)
export default User


