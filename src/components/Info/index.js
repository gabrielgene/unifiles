import React, { Component } from 'react';
import './style.css'


export class InfoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  hideList = () => {
    console.log('hide list');
    this.setState({visible: false});
  }

  showList = () => {
    console.log('show list');
    this.setState({visible: true});
  }

  render() {
    return (
      <div className="InfoItem">
        <div className="InfoItem-img-wrapper">
          <img className="InfoItem-img" src="https://files.slack.com/files-pri/T758QBX47-F74DVMMKP/info-cards.jpg?pub_secret=2752f57365" alt="avaliacao" />
        </div>
      </div>
    );
  }
}

export default InfoItem;
