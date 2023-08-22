import User from '../../models/User.js'


 async function update (req,res) {


    //logica necesaria para poder actualizar un usuario cuyo id es id
    //mongoose .findByIdAndUpdate() 

    try{
        await User.updateOne({_id: req.params.id}, req.body);
        return res.status(200).json({
            success: true,
            message: 'The user was successfully updated!!'
        })

      }
      catch(error) {
        console.log(error)
        return res.status(500).json({
                 success: false,
                 message: 'error updating user'
              })
      } 
    } 


export default update

    