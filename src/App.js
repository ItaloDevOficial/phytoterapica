import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Frete from './Componentes/Frete';
import Header from './Componentes/Header';
import Nav from './Componentes/Nav';
import Home from './Componentes/Home';
import Essencias from './Componentes/Essencias';
import Vegetais from './Componentes/Vegetais'
import Sinergias from './Componentes/Sinergias'
import Naturais from './Componentes/Naturais';
import Pessoal from './Componentes/Pessoal';
import Aromatizadores from './Componentes/Aromatizadores';
import Acessorios from './Componentes/Acessorios';
import Inscreva_Se from './Componentes/Inscreva_Se';
import Visao from './Componentes/Visao';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div>
      <Router>

      <Frete />
      <Header />
      <Nav />

      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Essencias' element={<Essencias />} />
      <Route path='/Vegetais' element={<Vegetais />} />
      <Route path='/Sinergias' element={<Sinergias />} />
      <Route path='/Naturais' element={<Naturais />} />
      <Route path='/Pessoal' element={<Pessoal />} />
      <Route path='/Aromatizadores' element={<Aromatizadores />} />
      <Route path='/Acessorios' element={<Acessorios />} />

      </Routes>

      <Inscreva_Se />
      <Visao />

    <Rodape />

    </Router>
    </div>
  );
}

export default App;
