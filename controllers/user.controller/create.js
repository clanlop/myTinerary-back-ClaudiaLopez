import User from '../../models/User.js'

 async function create (req,res){

//logica necesaria para poder crear un usuario
//con los metodos de mongoose .create()
try{
       const newUser =await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'User created!!'
        })
    }
catch(error){
   next(error)
    }
    }
    export default create