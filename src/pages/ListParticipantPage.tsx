import React, { useEffect, useReducer } from 'react'
import NavBar from '../components/NavBar'
import ParticipantItem from '../components/ParticipantItem';
import { InitParticipante, Particpante } from '../model/Particiante';
import ParticipanteReducer from '../reducers/ParticipanteReducer'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListParticipantPage.css';


const ListParticipantPage = () => {

  const [parti, setParti] = useState<Particpante[]>([]);

  useEffect(() => {
    const local = localStorage.getItem('participantes');
    const list = local ? JSON.parse(local) : [];
    setParti(list)
  }, []);

  return (
    <div className='container'>
      <div className="d-grid">
        {/* <button className="">Agregar</button> */}
        <Link className='btn btn-success' to={'/registrarse'}>Agregar</Link>
      </div>
      <div className="row mt-5">
        <div className="col shadow rounded border border-white">
          {
            parti.map((p) => (
                <ParticipantItem key={p.id} id={p.id!} nombre={p.nombre!} tw={p.twitter!} avatar={p.avatar!} />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default ListParticipantPage