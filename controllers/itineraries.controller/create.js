import Itinerary from '../../models/Itinerary.js'
async function create (req,res){
    try{
      const newItinerary=  await Itinerary.create(req.body);
        return res.status(201).json({
                success: true,
                message: 'Itineraries created!!'  
             })
        }
    catch(error){
        console.log(error)
        return res.status(500).json({
                 success: false,
                 message: 'error creating a Itineraries'
              })
        }
    }
    export default create 