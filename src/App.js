import './App.css';
import Adicional from './Formulario/Adicional';
import Datos from './Formulario/Datos';
import Experiencia from './Formulario/Experiencia';
import Formacion from './Formulario/Formacion';
import Habilidades from './Formulario/Habilidades';
import Idiomas from './Formulario/Idiomas';
// import { url } from './config';
import { Button } from '@material-ui/core';


function App() {

  const objeto = {}

  const manejador = (lista, id) => {
    objeto[id] = lista;
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(objeto);
  }

  return (
    <form onSubmit={submit}>
      <Adicional manejador={manejador} />
      <Datos manejador={manejador} />
      <Experiencia manejador={manejador} />
      <Formacion manejador={manejador} />
      <Habilidades manejador={manejador} />
      <Idiomas manejador={manejador} />
      <Button type="submit">Click</Button>
    </form>
  );
}

export default App;
