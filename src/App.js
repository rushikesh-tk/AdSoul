import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/Homescreen/Homescreen';

const App = () => {
  return(
    <Router>
      <Route path="/" component={HomeScreen} exact />
    </Router>
  )
}

export default App;
