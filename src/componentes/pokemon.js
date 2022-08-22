import react,{useState} from "react"
import {Usefetch }from "./Usefetch"
import { useState } from "react"

const pokemon = ( )=> {
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const estado= Usefetch(url)
    const {cargando,data}=estado
    cargando? console.log("cargando"): console.log(data.resultado)


    return (
        <div>
            <h1>esta es la pagina de pokemos</h1>
        </div>
    )
}
export default pokemon
