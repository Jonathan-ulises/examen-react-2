import UTLogo from '../assets/img/UTL-Logo.webp';
import TICLogo from '../assets/img/TiCLogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={UTLogo} alt="Logo" height="24" className="d-inline-block align-text-top" />
          <img src={TICLogo} alt="Logo" height="24" className="ms-2 d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link active" arial-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to='/participantes' className="nav-link">Participantes</Link>
            </li>
            <li className="nav-item">
              <Link to='/registrarse' className="nav-link">Registro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar