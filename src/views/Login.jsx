import { Layout } from "../components/Layout"
import { useState } from "react"
import "../style/login.css"
  


const Login = () => {

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")  
const [succes,setSucces]=useState("")  
  
const handleSubmit = (e) => {
  e.preventDefault()
  
  setError("")
  setSucces("")
  
    if (!email || !password) {
      setError("Debe completar ambos campos")
      return
    }
      
      const newUser = {
        email,
        password
      }
      console.log(newUser)
      
      
      
      setSucces("Usuario logueado")
      
  setEmail("")
  setPassword("")  
    
  }



    {/*espera al eventp E y el evento trae el valor de lo que se pondra en el input */ }
    const handleEmail =(e)=>{
      setEmail(e.target.value) 
    }
    
    const handlePassword = (e) => {
      setPassword(e.target.value)
}

  
  return (
    <Layout>
      

      <section className="container-card">
        <form onSubmit={handleSubmit}>
        <div  className="card">
          <h1>Inicia Sesión </h1>
          <div>
            <label>Correo Electronico:</label>
            <input type="text" placeholder="Ingrese su correo electronico" onChange={handleEmail} value={email}/>

          </div>


          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Ingrese su contraseña" onChange={handlePassword   }  value={password}/>
         
          </div>

          <button>Enviar</button>
        
          {
            error && <p style={{color:"tomato"}}>{error }</p>
          }
          {
            succes && <p style={{color:"yellowgreen"}}>{ succes}</p>
          }
        </div>
        </form>

      </section>

    </Layout>
  )
}
export {Login}