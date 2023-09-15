import { Schema, model, Types } from "mongoose";
let collection= 'itineraries';
let schema = new Schema({
    excursion:{ type: String, required: true},
    price:{ type: Number, required: true},
    duration:{ type: Number, required: true},
    hashtags:[{ type: String, required: true}],
    like:{ type: Number, required: false},
    comments:[{ type: String, required: false}],
    coordinator:{
        name:{ type: String, required: true},
        photo:{ type: String, required: true},
        activities:{
            activity1:{type:String},
            activity2:{type:String},
            activity3:{type:String},
            description1:{type:String},
            description2:{type:String},
            description3:{type:String}

        }
    },
    city:[{type: Types.ObjectId, ref: 'cities'}] 

},
{
    timestamps: true
}
)
const Itinerary = model(collection, schema)

export default Itinerary;