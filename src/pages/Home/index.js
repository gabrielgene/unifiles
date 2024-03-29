import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import './style.css';
import Topbar from '../../components/Topbar'

class Home extends Component {
  render() {
    return (
      <div className="">
        <Topbar showSearch />
        <div className="Landing">
          <Jumbotron bsClass="Landing">
            <div className="Landing-text-top">
              <p>
                SUPORTE UNIFICADO PARA SUAS MATÉRIAS.
              </p>
            </div>
            <img
              className="Landing-img"
              src="https://files.slack.com/files-pri/T758QBX47-F743X2KQT/img_home.png?pub_secret=fc05926a45"
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
