const Error =(props)=>{

    
            if(props.err==true){
                 return( <p>¡Registro realizado con éxito!</p>)
            }else if(props.err==false){
                return(<p>¡Faltan rellenar campos!</p>)
            }else{
                return(<p></p>)
            }
        
  

}

export default Error