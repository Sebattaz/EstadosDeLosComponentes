import { useState } from "react"
import Error from "./Alert"


const Formu =()=>{
    const [name, setName] = useState("") 
    const [mail, setMail]= useState("")
    const [pass, setPass]=useState("")
    const [rePas, setRePas]=useState("")
    const [registro, setRegistro]=useState()

    const handleClick = () => {
        if (name !== "" && mail !== "" && pass !== "" && rePas !== "") {
          setRegistro(true);
          
        } else {
          setRegistro(false);
          
        }
    }
    
    return(
        <>
            <input type="text" placeholder="Ingresa Nombre" onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="tuemail@ejemplo.com" onChange={(e)=>setMail(e.target.value)} />
            <input type="password" placeholder="Ingresa Contraseña" onChange={(e)=> setPass(e.target.value)}/>
            <input type="password" placeholder="Repite Contraseña" onChange={(e)=>setRePas(e.target.value)}/>
            <input type="button" value="Registrarse" onClick={handleClick} />
            <Error err={registro}/>
            
        </>
    )

}

export default Formu