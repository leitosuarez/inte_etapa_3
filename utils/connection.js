import mongoose from 'mongoose'
const connectionToDB = async (uri)=> {
    
    try {
        await mongoose.connect(uri)    
        console.log('CONEXION A MONGO OK')
    } catch (error) {
        console.log('conexion error', error)
        
    }
}

export default connectionToDB