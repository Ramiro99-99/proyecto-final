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
  
<section className="card-container">
            {
              
            products.map((product) => <div key={product.id} 
            >
              <section className="card">

              <img src={product.image} alt={product.title} />
             
                <div className="cart-content">
              <h2 key={product.id}>{product.title}</h2>
              <p className="price">${product.price}</p>
              <p className="card-description">{ product.description}</p>
              <p><strong>{ product.category}</strong></p>
               
              { 
                user && <div>

              <button > Actualizar</button>
              <button onClick={()=>(handleDelete(product.id))}>Borrar</button>
            
                </div> 
              
            }
            </div>
              </section>
              
            </div>)
               
          }
          
        

  </section>

      
    </Layout>
  )
}

export { Home }