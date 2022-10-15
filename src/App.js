import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Apidatas from './apidatas';
import Showdetails from './showdetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={ <Apidatas/>}/>
          <Route path='/:id' element={<Showdetails/>}/>
        </Routes>
      </Router>
   
   </div>
  );
}

export default App;
