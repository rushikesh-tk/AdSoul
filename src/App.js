import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/Homescreen/Homescreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={HomeScreen} exact />
      </Router>
    </QueryClientProvider>

  )
}

export default App;
