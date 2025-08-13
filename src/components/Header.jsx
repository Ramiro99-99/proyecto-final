import { Link } from "react-router-dom"



{/*alt para escribir en varias lineas a la vez */}
const Header = () => {
  return (
    <header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOfQZ-LhkRa40zhwlae_IEqaqM1iFR21HAw&s" alt="" />
      <nav>
        <u>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <button>Cerrar Sesión</button>
          
        </u>
      </nav>
    </header>
  )

}

export {Header}