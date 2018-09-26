import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkerCardList from './containers/worker-card-list';

import './App.css';

const App = () => (
  <div className="App">
    <WorkerCardList />
  </div>
);

export default App;
