import City from '../../models/City.js'



async function read (req,res){
      let queries={} 
      if (req.query.city){
      queries.city=new RegExp(`^${req.query.city}`, 'i')
      }
      if(req.query.country) {
        queries.country = req.query.country
    }

    try{
        const cities=await City.find(queries).populate('user').populate('itinerary');
        if(cities.length > 0){
        return res.status(200).json({
                success: true,
                cities:cities
            })
        }
            //error del cliente
        return res.status(404).json({
                success: false,
                message: 'no cities found'
            })
    }
        //error del servidor
    catch(error){
        console.log('error')
        return res.status(500).json({
                 success: false,
                 message: 'error get a cities'
              })
        }
}



export default read;
