import User from '../../models/User.js'


async function read (req,res){
    //logica necesaria para poder leer todos  los usuarios
    //con los metodos de mongoose .find() .findOne() .finById()
    let queries={} 
    if (req.query.name){
    queries.name=new RegExp(`^${req.query.name}`, 'i')
    }
    if(req.query.email) {
        queries.email = req.query.email
    }
    try{
        const users=await User.find(queries);
    if(users.length > 0){
    return res.status(200).json({
            success: true,
            users:users
        })
    }
        //error del cliente
    return res.status(404).json({
            success: false,
            message: 'no users found'
        })
}


    catch(error){
    next(error)

}
}

export default read