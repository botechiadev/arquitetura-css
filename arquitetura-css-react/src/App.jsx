import {Api1Provider} from './common/context/api1-context'
import {Api2Provider} from './common/context/api2-context'

import { Footer } from './components/Footer/Footer';
import Router from './router/Router';
function App() {


  return (
    <>
        <Api2Provider>
    <Api1Provider>
      <Router/>
      <Footer />
      </Api1Provider>
      </Api2Provider>
    </>
  );
}

export default App;
