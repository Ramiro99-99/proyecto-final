import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Layout>
    <div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver a inicio</Link>
    </div>
      
    </Layout>
  )
}
export {NotFound}