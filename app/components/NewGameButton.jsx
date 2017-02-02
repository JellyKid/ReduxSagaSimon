import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { startNewGame } from '../redux/actions';

class NewGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    if(!this.props.game)
      this.props.dispatch(startNewGame());
  }
  render(){
    return (
      <Button bsStyle="primary" className="btn-responsive" onClick={this.handleClick}>New Game</Button>
    );
  }
}

function mapStateToProps(state) {
  return {game: state.game};
}

export default connect(mapStateToProps)(NewGameButton);
