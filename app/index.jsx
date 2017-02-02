import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import GameShell from './components/GameShell';
import NewGameButton from './components/NewGameButton';
import { Grid, Col } from 'react-bootstrap';

import './style/bs.css';
import './style/custom.css';


const App = (
  <div className="mainApp">
    <GameShell />
    <Col xs={8} xsOffset={2} lgHidden mdHidden smHidden><NewGameButton /></Col>
  </div>
);

render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('app')
);
