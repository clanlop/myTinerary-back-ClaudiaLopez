import Itinerary from "../../models/Itinerary.js";

async function read (req,res){
    let queries={} 
    if (req.query.itinerary){
    queries.itinerary=new RegExp(`^${req.query.itinerary}`, 'i')
    }
 //  if(req.query.cityId) {
  //   queries.city = req.query.cityId}

  try{
    let itineraries
    if (req.query.city === 'true'){
        itineraries=await Itinerary.find(queries).populate('city');

    }else {
        itineraries = await Itinerary.find(queries);
    }

      
      if(itineraries.length > 0){
      return res.status(200).json({
              success: true,
              itineraries:itineraries
          })
      }
          //error del cliente
      return res.status(404).json({
              success: false,
              message: 'no itineraries found'
          })
  }
      //error del servidor
  catch(error){
      console.log('error')
      return res.status(500).json({
               success: false,
               message: 'error get a itineraries'
            })
      }
}



export default read;