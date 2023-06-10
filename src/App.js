import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NossaLoja from './pages/NossaLoja';
import Blogs from './pages/Blog';
import ComparacaoProduto from './pages/ComparacaoProduto';
import ListaDesejos from './pages/ListaDesejos';
import Login from './pages/Login';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Signup from './pages/signup';
import RedefinirSenha from './pages/RedefinirSenha';
import SingleBlog from './pages/SIngleBlog';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import PoliticaReembolso from './pages/PoliticaReembolso'
import PoliticaEnvio from './pages/PoliticaEnvio';
import TermosCondicoes from './pages/TermosCondicoes'
import ProdutoUnico from './pages/ProdutoUnico'




function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path='contato' element={<Contato/>}/>
          <Route path="produto" element={<NossaLoja />} />
          <Route path='produto/:id' element={<ProdutoUnico />}  />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
          <Route path="comparacaoProduto" element={<ComparacaoProduto />} />
          <Route path="lista-desejo" element={<ListaDesejos />} />
          <Route path="login" element={<Login />} />
          <Route path="esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="signup" element={<Signup />} />
          <Route path="redefinir-senha" element={<RedefinirSenha />} />
          <Route path="privacidade-politica" element={<PoliticaPrivacidade />} />
          <Route path="politica-reembolso" element={<PoliticaReembolso />} />
          <Route path="politica-envio" element={<PoliticaEnvio />} />
          <Route path="term-condicoes" element={<TermosCondicoes />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  </>
  );
}

export default App;
