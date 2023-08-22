import City from '../../models/City.js'

async function destroy(req,res) {

    try{
      await City.deleteOne({_id: req.params.id});
      return res.status(200).json({
          success: true,
          message: 'The city was successfully eliminated!!'
      })

    }
    catch(error) {
      console.log(error)
      return res.status(500).json({
               success: false,
               message: 'Error deleting city'
            })
    } 
  } 


export default destroy