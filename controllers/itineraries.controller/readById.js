import Itinerary from "../../models/Itinerary.js";
async function readById(req,res){
  
   
    try{
        const oneItinerary=await Itinerary.findById(req.params.id).populate('city');
        if (oneItinerary){
        return res.status(200).json({
            success: true,
            itinerary:oneItinerary
        })
            }
        return res.status(404).json({
            success: false,
            message: 'no itinerary found'
        })
       
        }
    catch(error){
        console.log('error')
        return res.status(500).json({
            success: false,
            message: 'error get a itinerary'
        })
    }
    }
    export default readById