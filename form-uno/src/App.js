
import './App.css';
import comps from './componentes';

function App() {

  return (<>
    <div className="barra">
      <h1>formulario</h1>
    </div>

    <div className='todo'>
      <div className='content'>
        <comps.Formulario/>        
        <comps.Contador />
      </div>
    </div>
  </>

  );
}

export default App;
