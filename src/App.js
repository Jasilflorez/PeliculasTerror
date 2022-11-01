import './App.css';
import { Aside } from './Components/Aside/Aside';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/footer/Footer';

function App() {
  return (
    <div className="Container-App">
      <Aside/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;