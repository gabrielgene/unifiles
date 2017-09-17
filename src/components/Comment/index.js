import React from 'react';
import './style.css'

const comments = [
  {user: 'EduBarcelar', msg: 'Muito bom, me salva aqui!', pts: '53'},
  {user: 'MA_Santos', msg: 'Legal', pts: '59'},
  {user: 'Ravi', msg: 'Estava Facil', pts: '20'},
  {user: 'MarcoGross', msg: 'Tambem achei!', pts: '36'},
]

// const Comment = () => {
//     comments.map((comment) => (
//       <div>
//         {comment.msg}
//       </div>
//      )}

// )



export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: comments,
      value: '',
    };
  }

  handleChange = (e) => {
    console.log(e.target);
    this.setState({value: e.target.value});
  }

  addComment = () => {
    console.log('add comment called');
    const oneMore = {user: 'Ravi', msg: [this.state.value], pts: '42'};
    const st = this.state.comments;
    st.push(oneMore);
    console.log('st: ', st);
    this.setState({comments: st})
  }

  render() {
    const comments = this.state.comments;
    const showComments = comments.map(function(d, idx) {
      return(
      <div className="Comment-item" key={idx}>
        <div className="Comment-item-img-wrapper">
          <img className="Comment-item-img" src="https://files.slack.com/files-pri/T758QBX47-F73L9MR9N/usuario_cinza.png?pub_secret=1cb932b17e" alt="message"/>
        </div>
        <div className="Comment-item-inline">
          <div className="Comment-item-user">
            {d.user}
          </div>
          <div className="Comment-item-pts">
          • {d.pts} pts
          </div>
          <div className="Comment-item-msg">
            {d.msg}
          </div>
        </div>
      </div>
    )
    });
    console.log('showtime:', showComments);
    return (
      <div className="Comments">
        <div className="Comments-header">
          <img className="Comments-header-img" src="https://files.slack.com/files-pri/T758QBX47-F745HRSBD/comentario.png?pub_secret=f73f851830" alt="message"/>
          <div className="Comments-header-text">Comentários (12)</div>
        </div>
        {showComments}
        <div className="CommentInputBar">
            <img className="Comment-input-img" src="https://files.slack.com/files-pri/T758QBX47-F74BNS6RJ/usuario_azul.png?pub_secret=387abc12b4" alt="message"/>
          <input name="comment-input" className="Comment-input form-control" type="text" placeholder="comentário" value={this.state.value} onChange={this.handleChange}/>
          <button className="Comment-input-button" onClick={this.addComment}> enviar </button>
        </div>
      </div>
    );
  }
}

export default Comments;
