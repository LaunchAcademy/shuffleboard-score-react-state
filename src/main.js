import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import GameContainer from './containers/game-container'


ReactDOM.render(
  <GameContainer />,
  document.getElementById('app')
);
