import SButton from "./SocialButton"
import Formu from "./Formulario";
import React from 'react';

const Registro =()=>{

    return(
        <>
            <div className="Titulo"><h1>Formulario</h1></div>
            <div className="Social">
                <SButton icon="github"/>
                <SButton icon="facebook" />
                <SButton icon="linkedin" />
            </div>
            <span>O usa tu email para registrarte</span>
           <div className="Form">
                <Formu />
            </div>
            
        </>
    )

}

export default Registro