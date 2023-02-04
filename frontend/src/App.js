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

const App = () =>
{
  axios.defaults.baseURL = "http://127.0.0.1:8000/"
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;