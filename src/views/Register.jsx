import { Layout } from "../components/Layout"

const Register= () => {
  return (
    <Layout>
            <h1>Registrese </h1>

      <section>
        <h2>Bienvenido al Register </h2>
        <form>
         
          <div>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingrese su nombre" />
          </div>

         
          <div>
            <label>Correo Electronico:</label>
            <input type="email" placeholder="Ingrese su correo electronico" />
          </div>


          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Ingrese su contraseña" />
          </div>


        </form>
          </section>
      
    </Layout>
  )
}
export {Register}