import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/Homescreen/Homescreen';
import AppDetails from './screens/AppDetails/AppDetails';
import { useQuery } from 'react-query';



const App = () => {
  
  const appQuery = useQuery('apps', () =>
    fetch('https://api.npoint.io/4ca5aaf459a573940672').then(res => res.json())
  )


  return (
    <Router>
      <Route path="/" exact >{
        appQuery.isLoading ? <h2>Loading</h2> : <HomeScreen apps={appQuery.data} />
      }</Route>

      <Route path="/app/:id">
        {appQuery.isLoading ? <h2>Loading</h2> : <AppDetails apps={appQuery.data} />}
      </Route>
    </Router>

  )
}

export default App;
