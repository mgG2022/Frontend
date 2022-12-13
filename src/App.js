import React from 'react';
import './App.css';
import './Footer.css';
import './Login.css';
import './Header.css';
import './Banner.css';



// importamos los componentes receta
import CompMostrarReceta from './receta/MostrarReceta';
import CompAgregarReceta from './receta/CrearReceta';
import CompEditarReceta from './receta/ModificarReceta';

// importamos los componentes historia
import CompMostrarHistoria from './historia/MostrarHistoria';
import CompAgregarHistoria from './historia/CrearHistoria';
import CompEditarHistoria from './historia/ModificarHistoria';

// importamos los componentes administrador
import CompMostrarAdministrador from './administrador.js/MostrarAdministrador';
import CompAgregarAdministrador from './administrador.js/CrearAdministrador';
import CompEditarAdministrador from './administrador.js/ModificarAdministrador';

// importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import PrivateRoute from './routers/PrivateRouter.js';

//importamos componentes
import Header from './components/Header.js';
import Footer from './components/Footer.js';
//import Login from './components/Login.js';
import Banner from './components/Banner.js';
import CompInicio from './components/Inicio.js';

//importamos login y crear cuenta
import CrearCuenta from './auth/CrearCuenta.js'
import Login from './auth/Login.js'
//import Routers from './routers/Routers.js';

function App() {
  
fetch("http://localhost:5000")
.then(res => res.text())
.then(res => this.setState({apiResponse: res}));

  return (
    <>
    <Header/>
    <Banner/>
    
      <main>
        <div className="App">
          
        <BrowserRouter>
        <Routes>
          
  

          <Route  path='/inicio/' element={<CompInicio />} />

          <Route  path='/receta/' element={<CompMostrarReceta />} />
          <Route  path='/receta/agregar/' element={<CompAgregarReceta />} />
          <Route  path='/receta/editar/:id' element={<CompEditarReceta />} />

          <Route  path='/historia' element={<CompMostrarHistoria />} />
          <Route  path='/historia/agregar' element={<CompAgregarHistoria />} />
          <Route  path='/historia/editar/:id' element={<CompEditarHistoria />} />

          <Route  path='/administrador' element={<CompMostrarAdministrador />} />
          <Route  path='/administrador/agregar' element={<CompAgregarAdministrador />} />
          <Route  path='/administrador/editar/:id' element={<CompEditarAdministrador />} />

          <Route  path='/login/' element={<Login />} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>


        </Routes>
      </BrowserRouter>
        </div>
    
      <Footer/>
      </main>
      </>
  );
}

export default App;
/*<Route  path='/login/' element={<Login />} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>*/
