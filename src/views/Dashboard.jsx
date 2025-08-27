import { useState } from "react"
import { Layout } from "../components/Layout"
import "../style/dashboard.css"


const Dashboard = () => {

  const [nombre, setNombre] = useState("")
  const[precio,setPrecio]=useState("")
  const [descripcion, setDescripcion] = useState("")
  const[imagen,setImagen]=useState("")
  const [error, setError] = useState("")
  const[succes,setSucces]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newProduct = {
      id:crypto.randomUUID(),
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
      imagen:imagen
        
}
 
        setError("")
        setSucces("")
    
    
    
    
    if (!nombre || !precio || !descripcion ||!imagen) {
      setError("Debe colocar obligatoriamente los cuatro valores")
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
     
      <section  className="dashboard">
        <div >
        <form onSubmit={handleSubmit}>
        <section className="card-dashboard">
            <h1>Agregar nuevo producto</h1>
          <div>
            <label className="producto-nombre">Nombre:</label>
            <input type="text" placeholder="Ingrese el nombre del producto" onChange={handleNombre} value={nombre} />
          </div>

          <div>
            <label>Precio:</label>
            <input type="number" placeholder="Ingrese el precio" onChange={handlePrecio} value={precio} />
          </div>

          <div>
            <label>Descripción:</label>
            <input placeholder="Ingrese una breve descripción" onChange={handleDescripcion} value={descripcion}></input>
          </div>

              <div>
                <label>Imagen:</label>
                <input type="url" placeholder="coloque una imagen" />
          </div>

          <button type="submit">Guardar producto</button>

          {
            error && <p style={{color:"red"}}>{error }</p>
          }
          {
            succes && <p style={{color:"slategrey"}}>{ succes}</p>
              }
              </section>
        </form>
        </div>
      </section>
    </Layout>
  )
}

export { Dashboard }
