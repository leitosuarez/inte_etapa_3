import storage from '../utils/handle_storage.js'
import multer from "multer";

const uploadsMiddleware = multer({storage})

export default uploadsMiddleware