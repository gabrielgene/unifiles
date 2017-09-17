import React from 'react';
import './style.css';
import { deburr } from 'lodash';
import { withRouter } from 'react-router';

class FileCard extends React.Component {

  render() {
    return (
      <div className="card" onClick={() => this.props.location.pathname === "/" ?
        window.location.href = '/materia/' + deburr(this.props.subject.toLowerCase().replace(/\s/g, ''))
        :
        window.location.href = '/materia/' + deburr(this.props.subject.toLowerCase().replace(/\s/g, '') + '/123')
      }>
        <div className="imageFileSection">
          {this.props.type === "Avaliação"
            ?
            <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F73GLRMJ4/avaliacao.png?pub_secret=ed43c1a186" alt="avaliacao" />
            : this.props.type === "Atividade"
              ?
              <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F746ATTU2/atividade.png?pub_secret=b76fbe5572" alt="atividade" />
              : this.props.type === "Apostila"
                ?
                <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F74C96C85/apostila.png?pub_secret=57211b2119" alt="apostila" />
                :
                <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F746AUPQS/discussao01.png?pub_secret=8c2ebc4a62" alt="message" />
          }
        </div>
        <div className="infoSection">
          <div className="titleWrapper">
            <span className="title">{this.props.type} • <em>{this.props.subject}</em></span>
          </div>
          <span className="subtitle">{this.props.subtitle}</span>
          <div className="info">
            <img className="likeIcon" src="https://files.slack.com/files-pri/T758QBX47-F74BU1RRB/like.png?pub_secret=0284ca2861" alt="like" />
            <span>{this.props.likes}</span>
            <img className="chatIcon" src="https://files.slack.com/files-pri/T758QBX47-F745HRSBD/comentario.png?pub_secret=f73f851830" alt="chat" />
            <span>{this.props.likes}</span>
            <span><em>{this.props.time}</em></span>
            <span><em>{this.props.lenght}</em></span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FileCard);
