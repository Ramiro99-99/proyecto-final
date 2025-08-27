import { Link } from "react-router-dom"
import { useState } from "react"
import "../style/header.css"


{/*alt para escribir en varias lineas a la vez */}
const Header = () => {
  const [user, setUser] = useState(true)
 
  return (
    
      
<>
      <header>
        
       

      {user &&(
  
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to="/" className="nav-link-active">Inicio</Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link-active" aria-current="page" to="Dashboard">Dashboard</Link></li>
              </ul>
            </div>
          </div>
              </nav>
    
    
        )}

        {!user &&(
        <>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="Login" className="nav-link-active">Login</Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link-active" aria-current="page" to="Register">Registrese</Link></li>
              </ul>
        
            </div>
          </div>
        </nav>

      
            

          </>
)}

       {/* 
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"  placeholder="Busque el producto que quiera">Enviar</button>
      </form>
      */} 
    
    </header >    
  </>  
)
}

      export {Header}
