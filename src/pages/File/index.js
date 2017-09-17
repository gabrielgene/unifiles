import React from 'react';
import Favorite from 'material-ui/svg-icons/action/favorite';
import NotFavorite from 'material-ui/svg-icons/action/favorite-border';
import Warning from 'material-ui/svg-icons/alert/warning';
import { Button } from 'react-bootstrap'
import Topbar from '../../components/Topbar';
import Comments from '../../components/Comment';
import './style.css'

export default class File extends React.Component {
  render() {
    return (
      <div>
        <div className="topWrapper">
          <Topbar />
          <div className="subjectBar">
            <img
              className="back"
              src="https://files.slack.com/files-pri/T758QBX47-F749NPCUS/seta_voltar.png?pub_secret=ab9f57ca49"
              alt="back"
              onClick={() => this.props.router.push(`/materia/${this.props.params.subject}`)}
            />
            <img
              className="subject"
              src="https://files.slack.com/files-pri/T758QBX47-F758YTL5D/disciplina.png?pub_secret=8261e9e190"
              alt="disc"
            />
            <h1>Cálculo I</h1>
          </div>
        </div>
        <div className="subjetContent">
          <div className="infoSubject">
            <div className="infoIcon">
              <img
                src="https://files.slack.com/files-pri/T758QBX47-F73GLRMJ4/avaliacao.png?pub_secret=ed43c1a186"
                alt="icon"
              />
            </div>
            <div className="infoText">
              <div className="title">
                <span>Avaliação</span>
              </div>
              <div className="teacher">
                <span>AV1 Clevenson</span>
              </div>
              <div className="spanWrapper">
                <span className="format">Formato: PDF</span>
                <span className="lenght">Tamanho: 900kb</span>
                <span className="publish"><em>Publicado em: 07/04/2017</em></span>
              </div>
            </div>
            <div className="imagesWrapper">
              <NotFavorite style={{ width: 55, height: 55 }} />
              <Warning style={{ width: 55, height: 55 }} />
            </div>

          </div>
          <div className="buttonWrapper">
            <div className="buttonDiv">
              <a href="http://metamorphoselinux.net/Shell_Script_do_Zero.pdf" download="http://metamorphoselinux.net/Shell_Script_do_Zero.pdf" >
                <Button block bsStyle="primary" ><img src="" /><span className="Landing-button-text"> BAIXAR </span></Button>
              </a>
            </div>
          </div>
          <Comments />
        </div >
      </div >
    )
  }
}
