import Itinerary from "../../models/Itinerary.js"
async function destroy(req,res) {

    try{
      await Itinerary.deleteOne({_id: req.params.id});
      return res.status(200).json({
          success: true,
          message: 'The Itinerary was successfully eliminated!!'
      })

    }
    catch(error) {
      console.log(error)
      return res.status(500).json({
               success: false,
               message: 'Error deleting Itinerary'
            })
    } 
  } 


export default destroy