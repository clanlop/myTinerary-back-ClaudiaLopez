import City from '../../models/City.js'


async function readById(req,res){
    try{
        const onecity=await City.findById(req.params.id);
        if (onecity){
        return res.status(200).json({
            success: true,
            city:onecity
        })
            }
        return res.status(404).json({
            success: false,
            message: 'no city found'
        })
        }
    catch(error){
        console.log('error')
        return res.status(500).json({
            success: false,
            message: 'error get a city'
        })
    }
    }
    export default readById