import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import LoadingPage from './pages/LoadingPage'
import ListParticipantPage from './pages/ListParticipantPage';
import RegisterPage from './pages/RegisterPage';
import EditPage from './pages/EditPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LoadingPage />} />
        <Route path='/participantes' element={<ListParticipantPage />} />
        <Route path='/registrarse' element={<RegisterPage />} />
        <Route path='/editar/:id' element={<EditPage />} />
      </Routes>
    </Router>
  )
}

export default App
