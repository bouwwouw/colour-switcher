import React, { Component } from 'react';
import nintendoSwitch from './nintendo_switch.jpg';
import joyconL from './joycon_l.png';
import joyconR from './joycon_r.png';
import './App.css';

export default class App extends Component {
  state = {
    left_hue: 0,
    left_contrast: 100,
    left_saturation: 100,
    right_hue: 0,
    right_contrast: 100,
    right_saturation: 100,
  };

  setValue = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const {
      left_hue, left_contrast, left_saturation,
      right_hue, right_contrast, right_saturation,
    } = this.state;
    const joyconLStyle = {
      filter: `hue-rotate(${left_hue}deg) saturate(${left_saturation}%) contrast(${left_contrast}%)`,
    };
    const joyconRStyle = {
      filter: `hue-rotate(${right_hue}deg) saturate(${right_saturation}%) contrast(${right_contrast}%)`,
    };
    return (
      <div>
        <div className="switch">
          <img src={nintendoSwitch} />
          <img className="joyconL" src={joyconL} style={joyconLStyle} />
          <img className="joyconR" src={joyconR} style={joyconRStyle} />
        </div>
        <div className="controls">
          <div className="left">
            <label>
            Hue
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              name="left_hue"
              value={left_hue}
              onChange={this.setValue}
            />
            {left_hue}deg
          </label>
            <label>
              Contrast
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                name="left_contrast"
                value={left_contrast}
                onChange={this.setValue}
              />
              {left_contrast}%
            </label>
            <label>
              Saturation
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                name="left_saturation"
                value={left_saturation}
                onChange={this.setValue}
              />
              {left_saturation}%
            </label>
          </div>
          <div className="right">
            <label>
              Hue
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                name="right_hue"
                value={right_hue}
                onChange={this.setValue}
              />
              {right_hue}deg
            </label>
            <label>
              Contrast
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                name="right_contrast"
                value={right_contrast}
                onChange={this.setValue}
              />
              {right_contrast}%
            </label>
            <label>
              Saturation
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                name="right_saturation"
                value={right_saturation}
                onChange={this.setValue}
              />
              {right_saturation}%
            </label>
          </div>
        </div>
      </div>
    );
  }
}
