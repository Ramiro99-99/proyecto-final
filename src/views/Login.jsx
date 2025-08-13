import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <Layout>
      <h1>Inicia Sesión </h1>

      <section>
        <h2>Bienvenido al Login </h2>
        <form>
          <div>
            <label>Correo Electronico:</label>
            <input type="text" placeholder="Ingrese su correo electronico" />
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
export {Login}