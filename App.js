// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="sm" style={{ marginTop: '1rem' }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
