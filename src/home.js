import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Jumbotron, Button } from 'react-bootstrap'
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="">
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

        <div className="Landing">
          <Jumbotron bsClass="Landing">
            <div className="Landing-text-top">
              <p>
                SUPORTE UNIFICADO PARA SUAS MATÉRIAS.
              </p>
            </div>
            <img
              className="Landing-img"
              src="//files.slack.com/files-pri/T758QBX47-F743X2KQT/img_home.png"
              role="presentation"
            />
            <p className="Landing-text-bottom">
               Acesse arquivos, discussões e fortaleça a sua comunidade acadêmica.
            </p>
              <div className="Landing-button">
                <Button block bsStyle="primary"><span className="Landing-button-text"> CONHEÇA </span></Button>
              </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;