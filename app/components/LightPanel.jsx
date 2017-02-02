import React from 'react';
import { connect } from 'react-redux';
import { playerPlay, togglePanel } from '../redux/actions';

function setupAudio(){
    //Setup audio for the button
    //Straight from https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
    this.audio = new (window.AudioContext || window.webkitAudioContext)();
    this.oscillator = this.audio.createOscillator();
    this.gainNode = this.audio.createGain();
    this.oscillator.type = 'square';
    this.oscillator.frequency.value = this.props.frequency;
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audio.destination);
    this.gainNode.gain.value =  0;
    this.oscillator.start();
}

class LightPanel extends React.Component {
  constructor(props){
    super(props);
    setupAudio.call(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);

    this.state = {
      pressed : false
    };
  }
  handleUp(){
    if(this.state.pressed && !this.props.locked){
      if(this.props.game){
        this.props.dispatch(playerPlay(this.props.color));
      } else {
        this.props.dispatch(togglePanel(this.props.color));
      }
      this.setState({pressed: false});
    }
  }
  handleDown(){
    if(!this.state.pressed && !this.props.locked){
      this.setState({pressed: true});
      this.props.dispatch(togglePanel(this.props.color));
    }
  }
  render(){
    let classes = this.props.color + " " + this.props.position;
    classes += this.props.toggled ? " light-up" : "";
    this.gainNode.gain.value =  this.props.toggled;
    return (
      <div className={classes} onClick={this.handleClick} onMouseDown={this.handleDown} onMouseUp={this.handleUp} onMouseLeave={this.handleUp}>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    toggled: state.panels[ownProps.color],
    locked: state.locked,
    game: state.game
  };
}

export default connect(mapStateToProps)(LightPanel);
