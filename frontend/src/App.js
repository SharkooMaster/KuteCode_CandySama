import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import axios from 'axios';

// Screens
import Home from './Screens/Home';
import Deck from './Screens/Deck';
import PreOrder from './Screens/PreOrder';
import Urmom from './Screens/Urmom';

const App = () =>
{
  axios.defaults.baseURL = "http://127.0.0.1:8000/"
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/urmom" element={<Urmom />} />
      </Routes>
    </Router>
  )
}

export default App;