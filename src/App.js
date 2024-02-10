import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produto from "./pages/Produtos";
import Blog from "./pages/Blog";
import ComparacaoProduto from "./pages/ComparacaoProduto";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaReembolso from "./pages/PoliticaReebolso";
import PoliticaEnvio from "./pages/PoliticaEnvio";
import TermAndContions from "./pages/TermAndContions";
import ProdutoUnico from "./pages/ProdutoUnico";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { OpenRoutes } from "./routing/OpenRoutes";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produtos" element={<Produto />} />
            <Route path="produtos/:id" element={<ProdutoUnico />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route
              path="carrinho"
              element={
                <PrivateRoutes>
                  <Carrinho />
                </PrivateRoutes>
              }
            />
            <Route
              path="meus-pedidos"
              element={
                <PrivateRoutes>
                  <Orders />
                </PrivateRoutes>
              }
            />
            <Route
              path="meu-perfil"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
            <Route path="compara-produto" element={<ComparacaoProduto />} />
            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route path="forgot-password" element={<EsqueceuSenha />} />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <Signup />
                </OpenRoutes>
              }
            />
            <Route path="reset-password/:token" element={<Resetpassword />} />
            <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="politica-reembolso" element={<PoliticaReembolso />} />
            <Route path="politica-envio" element={<PoliticaEnvio />} />
            <Route path="term-condicoes" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
