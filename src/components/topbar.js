import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'


class Topbar extends Component {
  render() {
      return (
          <div className="Header">
            <div className="Logo">
                <img
                    className="Logo-img"
                    src="//files.slack.com/files-pri/T758QBX47-F7481B736/marca_big.png"
                    role="presentation"
                />
            </div>
            <FormGroup
                controlId="formBasicText"
            >
                <FormControl
                    type="text"
                    placeholder="O que você procura?"
                />
                <FormControl.Feedback />
            </FormGroup>
        </div>
      );
  }
}

export default Topbar;