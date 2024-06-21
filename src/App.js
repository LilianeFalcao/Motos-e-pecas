import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Headers/Header';
import Pecas from './pages/Peca/Pecas';
import Usadas from './pages/Usada/Usadas';
import Footer from './components/Footer/Footer';
import { useFetch } from './hook/useFetch';
import { useState } from 'react';
import FormBusca from './components/Search/FormBusca';
function App() {

  const urlMotos = "http://localhost:3001/motos";
  const urlMotosUsadas = "http://localhost:3001/usadas";
  const urlPecas = "http://localhost:3001/pecas";

  const {dados : motos } = useFetch(urlMotos);
  const {dados : motosU } = useFetch(urlMotosUsadas);
  const {dados : MotoPecas } = useFetch(urlPecas);

  const [search , setSearch] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <FormBusca 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home urlMotos={urlMotos} motos={motos} />} />
        <Route path='/usadas' element={<Usadas motosU={motosU}/>} />
        <Route path='/pecas' element={<Pecas MotoPecas={MotoPecas} />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
