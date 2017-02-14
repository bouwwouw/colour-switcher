import React, { Component } from 'react';
import Slider from '../Slider';
import nintendoSwitch from './nintendo_switch.jpg';
import joyconL from './joycon_l.png';
import joyconR from './joycon_r.png';
import './App.css';

export default class App extends Component {
  state = {
    left: {
      hue: 0,
      contrast: 100,
      saturation: 100,
    },
    right: {
      hue: 0,
      contrast: 100,
      saturation: 100,
    }
  };

  setValue = ({ target: { value, dataset: { direction, property } } }) => this.setState({
    [direction]: {
      ...this.state[direction],
      [property]: parseInt(value, 10),
    },
  });

  generateStyles = ({ hue, contrast, saturation }) => ({
    filter: `hue-rotate(${hue}deg) saturate(${saturation}%) contrast(${contrast}%)`,
  });

  render() {
    return (
      <div>
        <div className="switch">
          <img alt="Nintendo Switch console" src={nintendoSwitch} />
          <img alt="Left JoyCon" src={joyconL} style={this.generateStyles(this.state.left)} />
          <img alt="Right JoyCon" src={joyconR} style={this.generateStyles(this.state.right)} />
        </div>
        <div className="controls">
          {Object.keys(this.state).map(direction => (
            <div key={direction} className={direction}>
              {Object.keys(this.state[direction]).map(property => (
                <Slider
                  key={direction + property}
                  direction={direction}
                  label={property}
                  max={property === 'hue' ? 360 : 200}
                  unit={property === 'hue' ? 'deg' : '%'}
                  value={this.state[direction][property]}
                  onChange={this.setValue}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
