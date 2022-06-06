
import Login from '../views/Login'
import Cadastro from '../views/Cadastro';
import Home from '../views/home';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';
function Rotas(){
    return(
    <Router>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/cadastro-usuario" element={<Cadastro/>}/>
               <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
    </Router>
    );
}

export default Rotas;