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
            <input type="text" placeholder="Ingrese el nombre del producto" />
          </div>


          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Ingrese el nombre del producto" />
          </div>
        </form>

        

      </section>
    </Layout>
  )
}
export {Login}