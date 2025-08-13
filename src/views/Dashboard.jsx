import { Layout } from "../components/Layout"



const Dashboard = () => {
  return (
    <Layout>
      <h1>Panel de Control</h1>
      <section>
        <h2>Agregar nuevo producto</h2>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingrese el nombre del producto" />
          </div>

          <div>
            <label>Precio:</label>
            <input type="number" placeholder="Ingrese el precio" />
          </div>

          <div>
            <label>Descripción:</label>
            <textarea placeholder="Ingrese una breve descripción"></textarea>
          </div>

          <button type="submit">Guardar producto</button>
        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }
