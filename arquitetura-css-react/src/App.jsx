import {Api1Provider} from './common/context/api1-context'
import { Footer } from './components/Footer/Footer';
import Router from './router/Router';
function App() {


  return (
    <>
    <Api1Provider>
      <Router/>
      <Footer />
      </Api1Provider>
    </>
  );
}

export default App;
