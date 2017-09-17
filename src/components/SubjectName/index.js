import React from 'react';
import './style.css';
import Favorite from 'material-ui/svg-icons/toggle/star';
import NotFavorite from 'material-ui/svg-icons/toggle/star-border';

export default class SubjectName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false }
  }

  toggleChange = () => {
    this.setState({ favorite: !this.state.favorite });
  }

  render() {
    const star = this.state.favorite ?
      <div onClick={this.toggleChange}>
        <Favorite style={{ height: 41, width: 44 }} />
      </div>
      :
      <div onClick={this.toggleChange}>
        <NotFavorite style={{ height: 41, width: 44 }} />
      </div>

    return (
      < div className="subjectName" >
        <div className="imageFileSection imageSubject">
          <img src="https://files.slack.com/files-pri/T758QBX47-F758YTL5D/disciplina.png?pub_secret=8261e9e190" alt="disciplina" />
        </div>
        <div className="infoWrapper">
          <h1 className="titleSubject title">Disciplina (ENG001)</h1>
          <h1 className="subtitleSubject">{this.props.props.params.subject === 'algoritmos' ? 'ALGORITMOS' : 'CÁLCULO I'}</h1>
        </div>
        <div className="starIcon">
          {star}
        </div>
      </div >
    )
  }
}
