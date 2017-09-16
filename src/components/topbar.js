import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import Search from './Search';


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
            <Search />
        </div>
      );
  }
}

export default Topbar;