import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Duelo } from './Blog/Duelo';
import { Problemas } from "./Blog/Problemas";
import { Divorcio } from "./Blog/Divorcio";
import { AntiEstres } from "./Blog/antiEstres/index";
import { Velas } from "./Blog/Velas";
import { Piedras } from "./Blog/Piedras";
import { Podcast } from "./Podcast";
import { Footer } from './Footer/Footer';
import { Header } from './Header';
import { Inicio } from "./Inicio/index";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetail } from "./ItemDetail/ItemDetail";

export const AppRouter = () => {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/Duelo" element={<Duelo />}/>
        <Route path="/Problemas" element={<Problemas />}/>
        <Route path="/Divorcio" element={<Divorcio />}/>
        <Route path="/antiEstres" element={<AntiEstres />}/>
        <Route path="/Velas" element={<Velas />}/>
        <Route path="/Piedras" element={<Piedras />} />
        <Route path="/Podcast" element={<Podcast />}/>
        <Route path="/Producto/:id" element={<ItemDetail />}/>
        
      </Routes>
      <Footer/>
  </>
  )
}

