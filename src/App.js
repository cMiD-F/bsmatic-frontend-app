import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos";
import Blog from "./pages/Blog";
import ComparacaoProduto from "./pages/ComparacaoProduto";
import ListaDesejo from "./pages/ListaDesejo";
import Login from "./pages/Login";
import EsqueciSenha from "./pages/EsqueceuSenha";
import Signup from "./pages/Signup";
import ResetSenha from "./pages/ResetSenha";
import SingleBlog from "./pages/SingleBlog";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaReembolso from "./pages/PoliticaReebolso";
import PoliticaEnvio from "./pages/PoliticaEnvio";
import TermosCondicoes from "./pages/TermosCondicoes";
import ProdutoUnico from "./pages/ProdutoUnico";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produto" element={<Produtos />} />
            <Route path="produto/:id" element={<ProdutoUnico />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compara-produto" element={<ComparacaoProduto />} />
            <Route path="lista-desejo" element={<ListaDesejo />} />
            <Route path="login" element={<Login />} />
            <Route path="esqueci-senha" element={<EsqueciSenha />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-senha" element={<ResetSenha />} />
            <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
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
