import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCardList from './containers/user-card-list';

import './App.css';

const App = () => (
  <div className="App">
    <UserCardList />
  </div>
);

export default App;
