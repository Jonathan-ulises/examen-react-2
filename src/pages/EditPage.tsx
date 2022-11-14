import { useReducer, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AvatarOne from '../assets/img/avatar1.png';
import AvatarTwo from '../assets/img/avatar2.png';
import AvatarThree from '../assets/img/avatar3.png';
import { ACCION_PARTICIPANTE, InitParticipante, Particpante } from '../model/Particiante';
import ParticipanteReducer from '../reducers/ParticipanteReducer';
import { v4 as uuid } from 'uuid';

const init = () => {
  // Obtenemos el localstorage
  const participantes = localStorage.getItem('participantes');


  const parti: InitParticipante = {
    participantes: [],
    selectedParticipante: null
  }

  parti.participantes = participantes ? (JSON.parse(participantes!) as Particpante[]) : []

  return parti;
}

const EditPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apeMat, setApeMat] = useState('');
  const [apePat, setApePat] = useState('');
  const [email, setEmail] = useState('');
  const [twitterAc, setTwitterAc] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isTerm, setIsTerm] = useState(false);

  const initialState: InitParticipante = {
    participantes: [],
    selectedParticipante: null
  }

  useEffect(() => {
    const list = localStorage.getItem('participantes');
    const dataL = JSON.parse(list!) as Particpante[];
    const p = dataL.find(d => d.id === id);

    if (p != null || p != undefined) {
      setNombre(p?.nombre!);
      setApeMat(p?.apellidoM!);
      setApePat(p?.apelliodoP!)
      setEmail(p?.email!)
      setTwitterAc(p?.twitter!)
      setAvatar(p?.avatar!)
      setIsTerm(p?.isTerm!)
    } else {
      navigate('/')
    }


  }, [])

  const [state, dispatch] = useReducer(ParticipanteReducer, init())

  const actionAdd: ACCION_PARTICIPANTE = {
    type: 'addParticipante',
    payload: {
      participantes: init().participantes,
      selectedParticipante: {
        id: uuid(),
        nombre,
        apelliodoP: apePat,
        apellidoM: apeMat,
        email,
        twitter: twitterAc,
        avatar,
        isTerm
      }
    }
  }

  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log({
      nombre, apePat, apeMat, email, twitterAc, avatar, isTerm
    })

    if (isTerm) {
      // const data = {
      //   nombre, apePat, apeMat, email, twitterAc, avatar, isTerm
      // }

      let listP = [...actionAdd.payload.participantes];
      const idx = listP.findIndex(pt => pt.id === id);
      if (idx != -1) {
        listP.splice(idx, 1)
      }

      listP.push({
        id,
        nombre,
        apelliodoP: apePat,
        apellidoM: apeMat,
        email,
        twitter: twitterAc,
        avatar,
        isTerm
      })

      // dispatch(actionAdd);
      localStorage.setItem('participantes', JSON.stringify(listP))


      navigate('/participantes')
    }
  }

  return (
    <div className='container mt-5'>
      <p className="h2">Edicion de Participantes</p>
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
              onChange={ev => setApePat(ev.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="txtApellidoM" className="form-label">Apellido Materno</label>
            <input type="text" className="form-control" id="txtApellidoP" placeholder="Escribe tu apellido materno"
              value={apeMat}
              onChange={ev => setApeMat(ev.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="txtEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="txtEmail" placeholder="Escribe tu email"
              value={email}
              onChange={ev => setEmail(ev.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="txtTwitter" className="form-label">Twitter</label>
            <input type="text" className="form-control" id="txtTwitter" placeholder="Escribe la URL de su cuenta de twitter"
              value={twitterAc}
              onChange={ev => setTwitterAc(ev.target.value)} />
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-4 col-md-2 col-xl-2">
              <img src={AvatarOne} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="imgAvatar" id="avatar1"
                  value="A1"
                  checked={avatar == 'A1'}
                  onChange={ev => setAvatar(ev.target.value)} />
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
                  checked={avatar == 'A2'}
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
                  value="A3"
                  checked={avatar == 'A3'}
                  onChange={ev => setAvatar(ev.target.value)} />
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
              <input className="form-check-input" type="checkbox" checked={isTerm} id="flexCheckDefault"
                onChange={ev => setIsTerm(ev.target.checked)} />
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

export default EditPage