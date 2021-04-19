import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/Homescreen/Homescreen';
import AppDetails from './screens/AppDetails/AppDetails';
import { useQuery } from 'react-query';

const dummyData = [
  {
    id: '1',
    appName: 'Dream 11',
    publisherName: 'Test'
  },
  {
    id: '2',
    appName: 'Dream 11',
    publisherName: 'Test'
  },
  {
    id: '3',
    appName: 'Dream 11',
    publisherName: 'Test'
  },
  {
    id: '4',
    appName: 'Dream 11',
    publisherName: 'Test'
  },
  {
    id: '5',
    appName: 'Dream 11',
    publisherName: 'Test'
  }
]

const App = () => {

  const appQuery = useQuery('apps', () =>
    fetch('https://api.npoint.io/adf6676a313fa01f787d').then(res => res.json())
  )


  return (
    <Router>
      <Route path="/" exact >{
        appQuery.isLoading ? <h2>Loading</h2> : <HomeScreen apps={appQuery.data || dummyData} />
      }</Route>

      <Route path="/app/:id">
        {appQuery.isLoading ? <h2>Loading</h2> : <AppDetails apps={appQuery.data || dummyData} />}
      </Route>
    </Router>

  )
}

export default App;
