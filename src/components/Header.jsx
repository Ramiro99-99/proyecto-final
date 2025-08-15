import { Link } from "react-router-dom"
import { useState } from "react"


{/*alt para escribir en varias lineas a la vez */}
const Header = () => {
  const [user, setUser] = useState(true)
 
  return (
    <header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOfQZ-LhkRa40zhwlae_IEqaqM1iFR21HAw&s" alt="" />
      <nav>
        <ul>
          
         
          
        </ul>

        { 
          user && <>
           <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <button>Cerrar Sesión</button>
          </>
        }

        {
          !user && <>
           <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          
          </>
        }

      </nav>
    </header>
  )

}

export {Header}