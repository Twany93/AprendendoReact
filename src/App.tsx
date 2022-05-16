import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

// todo esse conteúdo dentro da função são as tags html que serão renderizadas pela index App.tsx

// dentro de uma funçaõ JavaScript, tenho  tem conteúdo html, devido a uma extensão de sintaxe jsx, no caso também utilizamos o typescript, logo arquivo deve ser salvo como .tsx


function App() {
  return (
    // pense em Router como um GPS, e o Route contem o caminho da rota de cada componente
    <Router>
      <Navbar/>
        <Switch>
          <div style={{minHeight:'100vh'}}>

            <Route exact path='/'>
              <Login/>
            </Route>

            <Route path='/login' >
              <Login/>
            </Route>

            <Route path='/home'>
              <Home/>
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario/>
            </Route>

            <Route path='/temas'>
              <ListaTema/>
            </Route>

            <Route path='/posts'>
              <ListaPostagem />
            </Route>

          </div>
        </Switch>
      <Footer/>  
    </Router>
  );
}

export default App;
