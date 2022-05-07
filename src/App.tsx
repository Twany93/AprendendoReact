import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import './App.css';


// todo esse conteúdo dentro da função são as tags html que serão renderizadas pela index App.tsx

// dentro de uma funçaõ JavaScript, tenho  tem conteúdo html, devido a uma extensão de sintaxe jsx, no caso também utilizamos o typescript, logo arquivo deve ser salvo como .tsx


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
// /////////