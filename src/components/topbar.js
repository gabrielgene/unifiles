import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import Search from './Search';
import { bubble as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '20px',
    top: '20px',
    
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Topbar extends Component {
  render() {
      return (
          <div className="Header">
            <Menu styles={styles} width={'50%'} /> 
            <div className="Logo">
                <img
                    className="Logo-img"
                    src="//files.slack.com/files-pri/T758QBX47-F7481B736/marca_big.png"
                    role="presentation"
                />
            </div>
            <Search />
            <img src="https://files.slack.com/files-pri/T758QBX47-F73JGEDLY/notificacoes.png?pub_secret=dabd98ee53" alt="notification" className="topbarNotification"/>
        </div>
      );
  }
}

export default Topbar;