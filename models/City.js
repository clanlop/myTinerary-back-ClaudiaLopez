import { Schema, model, Types } from "mongoose";
let collection = 'cities';

let schema = new Schema({
    city: { type: String, required: true},
    country:{type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    currency:{ type: String, required: true},
    departure_date: { type: Date, required: true},
    itinerary:{type: String, required: false},
    user: { type: Types.ObjectId, ref: 'users' },
    itinerary: [{ type: Types.ObjectId, ref: 'itineraries' }]
},
{
    timestamps: true
}
)
const City = model(collection, schema)

export default City;