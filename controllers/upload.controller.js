
const uploadImage = (req,res)=>{
    const image = req.file

    if (!image) {
        res.status(400).json({mensaje:'no se cargo la imagen necesaria'})
    }

    console.log(req.protocol) //http o https 
    console.log(req.get('host'))//localhost:8080
    console.log(image.filename)

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${image.filename}`

    res.json({imagen:urlCompletaBack}).status(201)
    console.log(image)

}

export default {uploadImage}