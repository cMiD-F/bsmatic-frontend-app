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
import WishList from './pages/ListaDesejos';
import Login from './pages/Login';
import Forgotpassword from './pages/EsqueceuSenha';
import Signup from './pages/signup';
import Resetpassword from './pages/RedefinirSenha';
import SingleBlog from './pages/SIngleBlog';
import PrivacyPolicy from './pages/PoliticaPrivacidade';
import RefundPolicy from './pages/PoliticaReembolso';
import ShippingPolicy from './pages/PoliticaEnvio';
import TermAndConditions from './pages/TermosCondicoes';
import ProdutoUnico from './pages/ProdutoUnico';



function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto" element={<NossaLoja />} />
          <Route path='produto/:id' element={<ProdutoUnico />}  />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
          <Route path="comparacaoProduto" element={<ComparacaoProduto />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="term-conditions" element={<TermAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  </>
  );
}

export default App;
