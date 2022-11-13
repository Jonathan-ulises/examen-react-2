import AvatarExample from '../assets/img/UTL-Logo.webp';

const ParticipantItem = () => {
  return (
    <div className='row my-5 shadow-sm rounded'>
      <div className="col-3">
        <img src={AvatarExample} style={{maxWidth: 100}} alt="Logo" className="img-fluid" />
      </div>
      <div className="col-8">
        <p className="h2">Nombre</p>
        <div className="d-flex">
          <img src="https://cdn.svgporn.com/logos/twitter.svg" style={{maxWidth: 30}} className="img-fluid" alt="..." />
          <p>@twitter</p>
        </div>
        <p>puesto</p>
      </div>
    </div>
  )
}

export default ParticipantItem;