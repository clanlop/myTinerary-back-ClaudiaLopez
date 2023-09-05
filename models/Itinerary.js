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
    },
    city:[{type: Types.ObjectId, ref: 'cities'}] 

},
{
    timestamps: true
}
)
const Itinerary = model(collection, schema)

export default Itinerary;