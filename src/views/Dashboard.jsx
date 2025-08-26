import { useState } from "react"
import { Layout } from "../components/Layout"



const Dashboard = () => {

  const [nombre, setNombre] = useState("")
  const[precio,setPrecio]=useState("")
  const[descripcion,setDescripcion]=useState("")
  const [error, setError] = useState("")
  const[succes,setSucces]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newProduct = {
      id:crypto.randomUUID(),
      nombre: nombre,
      precio: precio,
      descripcion:descripcion
        
}
 
        setError("")
        setSucces("")
    
    
    
    
    if (!nombre || !precio || !descripcion) {
      setError("Debe colocar obligatoriamente los tres valores")
      return
    }
    
    
    
    setSucces("Su producto fue registrado")    
    setNombre("")
    setPrecio("")
    setDescripcion("")
    
  }

  {/* el evento es E y setNombre va a capturar el valor del evento E*/}
  const handleNombre =(e)=>{
  setNombre(e.target.value)
}

  const handlePrecio =(e)=>{
  setPrecio(e.target.value)
}
  
  const handleDescripcion= (e) => {
  setDescripcion(e.target.value)
}


  
  return (
    <Layout>
      <h1>Panel de Control</h1>
      <section>
        <h2>Agregar nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingrese el nombre del producto" onChange={handleNombre} value={nombre} />
          </div>

          <div>
            <label>Precio:</label>
            <input type="number" placeholder="Ingrese el precio" onChange={handlePrecio} value={precio} />
          </div>

          <div>
            <label>Descripción:</label>
            <textarea placeholder="Ingrese una breve descripción" onChange={handleDescripcion} value={descripcion}></textarea>
          </div>


          <button type="submit">Guardar producto</button>

          {
            error && <p style={{color:"red"}}>{error }</p>
          }
          {
            succes && <p style={{color:"slategrey"}}>{ succes}</p>
          }

        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }
