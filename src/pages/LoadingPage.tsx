import UTLogo from '../assets/img/UTL-Logo.webp';
import TICLogo from '../assets/img/TiCLogo.png';
import { Link } from 'react-router-dom';

const LoadingPage = () => {
  return (
    <>
      <div className='container'>
        <header className='rounded shadow-sm'>
          <h1 className='text-center py-5'>
            Congreso de Tecnologias de la Informacion
          </h1>
        </header>

        <main className='container'>
          <div className="row justify-content-center">
            <div className="col-4">
              <img src={UTLogo} className="img-fluid" alt="UTLogo" />
            </div>
            <div className="col-4">
              <img src={TICLogo} className="img-fluid" alt="TICLogo" />
            </div>
          </div>
          <div className="d-grid mt-5">
            <Link to='/participantes' className="btn btn-primary py-3" arial-current="page">Inicio</Link>
          </div>
        </main>
      </div>

    </>
  )
}

export default LoadingPage