import User from '../../models/User.js'

async function destroy(req,res) {

    try{
      await User.deleteOne({_id: req.params.id});
      return res.status(200).json({
          success: true,
          message: 'The user was successfully eliminated!!'
      })

    }
    catch(error) {
     next(error)
    } 
  } 


export default destroy
