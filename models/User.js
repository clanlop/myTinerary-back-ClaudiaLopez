import { Schema, model, Types } from "mongoose";
let collection = 'users';

let schema = new Schema({
    name:{ type: String, required: true},
    email: { type: String, required: true},
    password:{type: String, required: true},
    photo: { type: String, required: true},
    role:{type: Number, required: true},
    online:{type: Boolean, required: true}
    
},
{
    timestamps: true
}
)
const User = model(collection, schema)
export default User


