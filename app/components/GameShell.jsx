import React from 'react';

import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

import LightPanel from './LightPanel';
import NewGameButton from './NewGameButton';

class GameShell extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Grid>
        <Col sm={8} smOffset={3} xs={12}>
          <div className="shell">
            <div className="controlCircle">
              <Col sm={8} xsHidden smOffset={1} lgOffset={2} className="newGameButton"><NewGameButton /></Col>
            </div>

            <Row className="topRow">
              <Col xs={6} className="lightPanel top-left-column">
                <LightPanel color="green" position="top-left" frequency={164.814}/>
              </Col>
              <Col xs={6} className="lightPanel top-right-column">
                <LightPanel color="red" position="top-right" frequency={440}/>
              </Col>
            </Row>
            <Row className="bottomRow">
              <Col xs={6} className="lightPanel bottom-left-column">
                <LightPanel color="yellow" position="bottom-left" frequency={277.183}/>
              </Col>
              <Col xs={6} className="lightPanel bottom-right-column">
                <LightPanel color="blue" position="bottom-right" frequency={329.628}/>
              </Col>
            </Row>
          </div>
        </Col>
      </Grid>
    );
  }
}

export default GameShell;
