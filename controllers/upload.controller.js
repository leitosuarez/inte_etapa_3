
const uploadImage = (req,res)=>{
    const image = req.file

    if (!image) {
        res.status(400).json({mensaje:'no se cargo la imagen necesaria'})
    }

    res.json({imagen:image.filename})
    console.log(image)

}

export default {uploadImage}