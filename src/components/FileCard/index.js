import React from 'react';
import './style.css';

const FileCard = (props) => (
  <div className="card" >
    <div className="imageFileSection">
      {props.type === "Avaliação"
      ?
      <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F73GLRMJ4/avaliacao.png?pub_secret=ed43c1a186" alt="avaliacao" />
      : props.type === "Atividade"
      ?
      <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F746ATTU2/atividade.png?pub_secret=b76fbe5572" alt="atividade"/>
      : props.type === "Apostila"
      ?
      <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F74C96C85/apostila.png?pub_secret=57211b2119" alt="apostila"/>
      :
      <img className="FileCard-img" src="https://files.slack.com/files-pri/T758QBX47-F746AUPQS/discussao01.png?pub_secret=8c2ebc4a62" alt="message"/>
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
        <img className="likeIcon" src="https://files.slack.com/files-pri/T758QBX47-F74BU1RRB/like.png?pub_secret=0284ca2861" alt="like"/>
        <span>{props.likes}</span>
        <img className="chatIcon" src="https://files.slack.com/files-pri/T758QBX47-F745HRSBD/comentario.png?pub_secret=f73f851830" alt="chat"/>
        <span>{props.likes}</span>
        <span><em>{props.time}</em></span>
        <span><em>{props.lenght}</em></span>
      </div>
    </div>
  </div>
)

export default FileCard;
