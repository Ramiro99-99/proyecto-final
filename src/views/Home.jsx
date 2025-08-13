import { Layout } from "../components/Layout"

const Home = () => {
  return (
    <Layout>
    
      <header>
        <h1>Título del Componente</h1>
        <p>
          Este es un ejemplo de componente estático en React sin colores
          ni clases, solo estructura HTML.
        </p>
      </header>

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
      </section>

  

      
    </Layout>
  )
}
export {Home}