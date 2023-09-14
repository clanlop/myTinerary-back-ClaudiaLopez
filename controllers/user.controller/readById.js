import User from'../../models/User.js'
async function readById(req,res){
    try{
        const oneuser=await User.findById(req.params.id);
        if (usercity){
        return res.status(200).json({
            success: true,
            user:oneuser
        })
            }
        return res.status(404).json({
            success: false,
            message: 'no city found'
        })
        }
    catch(error){
       next(error)
    }
    }
    export default readById