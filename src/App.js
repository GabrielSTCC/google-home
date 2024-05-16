import './componentes/Logo_google'
import './componentes/Cabecalho'
import './componentes/AreaDePesquisa'
import './componentes/Footer'
import Logo_google from './componentes/Logo_google';
import Cabecalho from './componentes/Cabecalho';
import AreaDePesquisa from './componentes/AreaDePesquisa';
import Footer from './componentes/Footer';


function App() {
  return (
    <div>
      <Cabecalho/>
      <Logo_google/>
      <AreaDePesquisa/>
      <Footer/>
    </div>
  );
}

export default App;
