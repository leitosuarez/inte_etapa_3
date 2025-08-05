import { json } from "express"

const handleMongoId = (element)=>{ //elemento -> document{}|array[]
    //elemento va a ser un objeto mongoose -> metodos,funciones para interactuar con el 
    element = JSON.parse(JSON.stringify(element)) //convierto un obj complejo con sus metodo en un obj de js vanilla
    const clave = '_id'

    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            element[i].id = element[i][clave]
            delete element[i][clave]
            
        }
    } else {
        element.id = element[clave] //tas creando una clave basada en otra
        delete element[clave]
    }

    return element
}

export default handleMongoId