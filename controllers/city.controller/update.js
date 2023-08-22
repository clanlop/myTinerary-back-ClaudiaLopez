import City from '../../models/City.js'


     async function update(req,res) {

      try{
        await City.updateOne({_id: req.params.id}, req.body);
        return res.status(200).json({
            success: true,
            message: 'The city was successfully updated!!'
        })

      }
      catch(error) {
        console.log(error)
        return res.status(500).json({
                 success: false,
                 message: 'error updating city'
              })
      } 
    } 


export default update