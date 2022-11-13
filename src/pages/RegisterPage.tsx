import { useState } from 'react';
import AvatarOne from '../assets/img/avatar1.png';
import AvatarTwo from '../assets/img/avatar2.png';
import AvatarThree from '../assets/img/avatar3.png';


const RegisterPage = () => {

  const [nombre, setNombre] = useState('');
  const [apeMat, setApeMat] = useState('');
  const [apePat, setApePat] = useState('');
  const [email, setEmail] = useState('');
  const [twitterAc, setTwitterAc] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isTerm, setIsTerm] = useState(false);


  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log({
      nombre, apePat, apeMat, email, twitterAc, avatar, isTerm
    })
  }

  return (
    <div className='container mt-5'>
      <p className="h2">Registro de Participantes</p>
      <div className="row justify-content-center shadow rounded mt-2">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="txtNombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="txtNombre" placeholder="Escribe tu nombre"
              value={nombre}
              onChange={ev => setNombre(ev.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="txtApellidoP" className="form-label">Apellido Paterno</label>
            <input type="text" className="form-control" id="txtApellidoM" placeholder="Escribe tu apellido patermo" 
              value={apePat}
              onChange={ev => setApePat(ev.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="txtApellidoM" className="form-label">Apellido Materno</label>
            <input type="text" className="form-control" id="txtApellidoP" placeholder="Escribe tu apellido materno" 
              value={apeMat}
              onChange={ev => setApeMat(ev.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="txtEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="txtEmail" placeholder="Escribe tu email" 
              value={email}
              onChange={ev => setEmail(ev.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="txtTwitter" className="form-label">Twitter</label>
            <input type="url" className="form-control" id="txtTwitter" placeholder="Escribe la URL de su cuenta de twitter" 
              value={twitterAc}
              onChange={ev => setTwitterAc(ev.target.value)}/>
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-4 col-md-2 col-xl-2">
              <img src={AvatarOne} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="imgAvatar" id="avatar1" 
                  value={avatar}
                  onChange={ev => setAvatar(ev.target.value)}/>
                <label className="form-check-label" htmlFor="avatar1">
                  Avatar 1
                </label>
              </div>
            </div>
            <div className="col-4 col-md-2 col-xl-2">
              <img src={AvatarTwo} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="imgAvatar" id="avatar2"
                  value='A2'
                  onChange={ev => setAvatar(ev.target.value)} />
                <label className="form-check-label" htmlFor="avatar2">
                  Avatar 2
                </label>
              </div>
            </div>
            <div className="col-4 col-md-2 col-xl-2">
              <img src={AvatarThree} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="imgAvatar" id="avatar3" 
                  value={avatar}
                  onChange={ev => setAvatar(ev.target.value)}/>
                <label className="form-check-label" htmlFor="avatar4">
                  Avatar 3
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span>Terminos y condiciones</span>
            <p className="fw-light">
              Mi informacion sera usada para el control estadistico del evento, doy autorizacion del uso de la informacion registrada
              para la creacion de informes estadisticos relacionados el evento.
            </p>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={false} id="flexCheckDefault"
                onChange={ev => setIsTerm(ev.target.checked)}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lei y acepto los terminos y condiciones
              </label>
            </div>
          </div>
          <div className="d-grid my-3">
            <button className="btn btn-success">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage