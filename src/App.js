import './App.css';
import PaginaCadastro from './pages/cadastroPrato';
import PaginaCardapio from './pages/cardapio';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element ={<HomePage />} />
      <Route path='/cadastro' element ={<PaginaCadastro />} />
      <Route path='/pratos' element ={<PaginaCardapio />} />
      </Routes>
    </Router>
  );
}

export default App;
