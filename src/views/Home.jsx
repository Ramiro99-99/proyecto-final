import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import "../style/products.css"

const Home = () => {
const [products,setProducts]=useState([])
const [user, setUser]=useState(true)
  const fetchingProducts = async () => {

    {/*response va a guardar lo que retorna el fetch */}
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    
    {/*convertimos lo que traemos de la api en JSON asi cuando ejecutamos el console log vemos la data en forma de arrays  */}
    const data = await response.json()
    

    setProducts(data)
    }

  useEffect(() => {
   fetchingProducts()
 },[])
    

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {method:"DELETE"})

    if (response.ok) {
      setProducts(prevProducts=>prevProducts.filter((product)=>product.id !=id))
    }    
 }
  
  
  
  
    return (
      <Layout>
    
      
        <h1>Título del Componente</h1>
        <p>
          Este es un ejemplo de componente estático en React sin colores
          ni clases, solo estructura HTML.
        </p>
      

      <section>
        <h2>Sección 1</h2>
        <p>
          Aquí va un párrafo descriptivo de la sección uno. Todo el contenido es
          fijo y no depende de props ni datos dinámicos.
        </p>
      </section>

      <section>
        <h2>Sección 2</h2>
        <ul>
          <li>Elemento de lista uno</li>
          <li>Elemento de lista dos</li>
          <li>Elemento de lista tres</li>
          </ul>
      
          {
            products.map((product) => <div key={product.id}>
              <h2 key={product.id}>{product.title}</h2>
              <img src={product.image} alt={product.title } />
              <p>{product.price}</p>
              <p>{ product.description}</p>
              <p><strong>{ product.category}</strong></p>
            
              { 
                user && <div>

              <button > Actualizar</button>
              <button onClick={()=>(handleDelete(product.id))}>Borrar</button>
            
                </div> 
              }
            </div>)
          }
          
          
        </section>

  

      
    </Layout>
  )
}

export { Home }