import { Layout } from "../components/Layout"
import { useState } from "react"
import "../style/register.css"

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const [error,setError]=useState("")
 const [succes,setSucces]=useState("")

  const handleUsername=(e)=>{
      setUsername(e.target.value)
  }

   const handleEmail=(e)=>{
      setEmail(e.target.value)
  }

   const handlePassword=(e)=>{
      setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    setError("")
    setSucces("")
    {/*si no hay user correo o password tienen que completar */}
        if (!username || !email || !password) {
          setError("debes completar los campos")
          return
        }

        const newUser={
          username,
          email,
          password
        }
        console.log(newUser)
        
        
        setUsername("")
        setEmail("")
        setPassword("")
        
        setSucces("Usuario registrado con exito")
  }

  return (
    <Layout>

      <section className="register">
        <form onSubmit={handleSubmit}>
         <section className="card-register">
        <h2>Si tiene cuenta registrese aqui</h2>
          <div>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingrese su nombre" onChange={(e)=>(handleUsername(e))} value={username}/>
          </div>

         
          <div>
            <label>Correo Electronico:</label>
            <input type="email" placeholder="Ingrese su correo electronico" onChange={(e)=>(handleEmail(e))} value={email}/>
          </div>


          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Ingrese su contraseña" onChange={(e) => (handlePassword(e))} value={password} />
            
            
          </div>

          
        {
            error && <p style={{ color: "red" }}> { error } </p>
          }
          {
            succes && <p style={{ color: "green" }}>{succes }</p>
          }
          <button>Enviar</button>
          </section>
      </form>
     </section>
    
    </Layout>
  )
}

export {Register}