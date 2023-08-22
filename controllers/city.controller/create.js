 import City from '../../models/City.js'
 
 
    async function create (req,res){
    try{
        const newCity=await City.create(req.body);
        return res.status(201).json({
                success: true,
                message: 'City created!!'  
             })
        }
    catch(error){
        console.log(error)
        return res.status(500).json({
                 success: false,
                 message: 'error creating a city'
              })
        }
    }
    
export default create 