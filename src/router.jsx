import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './pages/inicio/index.jsx'
import Complementar from './pages/complementar/index.jsx';
import Denuncia1 from './pages/denuncia1/index.jsx';
import Denuncia2 from './pages/denuncia2/index.jsx';

export default function Navegacao() {

    return(
        <BrowserRouter>
        <Routes>   
        <Route path='/' element={ <App/> } />
        <Route path='/denuncia1' element={ <Denuncia1/> } />
        <Route path='/denuncia2' element={ <Denuncia2/> } />
        <Route path='/complementar' element={ <Complementar/>} />
        </Routes>
        </BrowserRouter>
    )
}