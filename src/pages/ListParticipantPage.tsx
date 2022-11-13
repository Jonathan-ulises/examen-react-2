import React from 'react'
import NavBar from '../components/NavBar'
import ParticipantItem from '../components/ParticipantItem'

const ListParticipantPage = () => {
  return (
    <div className='container'>
      <div className="d-grid">
        <button className="btn btn-success">Agregar</button>
      </div>
      <div className="row mt-5">
        <div className="col shadow rounded border border-white">
          <ParticipantItem key={1}/>
          <ParticipantItem key={2}/>
          <ParticipantItem key={3}/>
          <ParticipantItem key={4}/>
          <ParticipantItem key={5}/>

        </div>
      </div>
    </div>
  )
}

export default ListParticipantPage