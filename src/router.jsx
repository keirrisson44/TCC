import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './pages/inicio/App.jsx'
import Complementar from './pages/complementar/index.jsx';
import Denuncia from './pages/denuncia/index.jsx';

export default function Navegacao() {

    return(
        <BrowserRouter>
        <Routes>   
        <Route path='/' element={ <App/> } />
        <Route path='/denuncia' element={ <Denuncia/> } />
        <Route path='/complementar' element={ <Complementar/>} />
        </Routes>
        </BrowserRouter>
    )
}