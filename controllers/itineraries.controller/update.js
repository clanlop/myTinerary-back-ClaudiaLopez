import Itinerary from "../../models/Itinerary.js";
async function update(req,res) {

    try{
      await Itinerary.updateOne({_id: req.params.id}, req.body);
      return res.status(200).json({
          success: true,
          message: 'The itinerary was successfully updated!!'
      })

    }
    catch(error) {
      console.log(error)
      return res.status(500).json({
               success: false,
               message: 'error updating itinerary'
            })
    } 
  } 


export default update