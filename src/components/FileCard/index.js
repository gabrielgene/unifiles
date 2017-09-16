import React from 'react';
import './style.css';

const FileCard = (props) => (
  <div className="card" >
    <div className="imageFileSection">
      {props.type === "Avaliação"
      ?
      <img src="https://files.slack.com/files-pri/T758QBX47-F73GLRMJ4/avaliacao.png?pub_secret=ed43c1a186" />
      : props.type === "Atividade"
      ?
      <img src="https://files.slack.com/files-pri/T758QBX47-F746ATTU2/atividade.png?pub_secret=b76fbe5572" />
      :
      <img src="https://files.slack.com/files-pri/T758QBX47-F74C96C85/apostila.png?pub_secret=57211b2119" />
      }
    </div>
    <div className="infoSection">
      <div className="titleWrapper">
        <span className="title">{props.type} • <em>{props.subject}</em></span>
      </div>
      <div className="subtitleWrapper">
        <span className="subtitle">{props.subtitle}</span>
      </div>
      <div className="info">
        <img className="likeIcon" src="https://files.slack.com/files-pri/T758QBX47-F74BU1RRB/like.png?pub_secret=0284ca2861" />
        <span>{props.likes}</span>
        <img className="chatIcon" src="https://files.slack.com/files-pri/T758QBX47-F745HRSBD/comentario.png?pub_secret=f73f851830" />
        <span>{props.likes}</span>
        <span><em>{props.time}</em></span>
        <span><em>{props.lenght}</em></span>
      </div>
    </div>
  </div>
)

export default FileCard;
