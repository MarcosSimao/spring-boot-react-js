import 'bootswatch/dist/flatly/bootstrap.css'
import Rotas from './rotas';
import './custom.css'
import NavBar from '../components/NavBar';
function App() {
 
  return (
    <>
    <NavBar/>
    <div className="container">
    <div className="row">
    <div className="col-md-6" style={{position:'relative',left: '300px'}}> 
    <div className="bs-docs-section">
    <Rotas/>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
