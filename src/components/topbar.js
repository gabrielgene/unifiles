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
      const showSearch = this.props.showSearch;
      const topbarSearchButton = <img src="https://files.slack.com/files-pri/T758QBX47-F7486JL8J/lupa.png?pub_secret=c96be253b3" alt="SearchButton" className="topbarSearchButton"/>
      const toggleSearch = showSearch ? <Search /> : topbarSearchButton;
      return (
          <div className="Header">
            <Menu styles={styles} width={'50%'}>
                <a className="sidebar-item" href="/">Perfil</a>
                <a className="sidebar-item" href="/about">Configurações</a>
                <a className="sidebar-item" href="/contact">Upload</a>
                <a className="sidebar-item" href="/contact">Sobre</a>
            </Menu>
            <div className="Logo">
                <img
                    className="Logo-img"
                    src="//files.slack.com/files-pri/T758QBX47-F7481B736/marca_big.png"
                    role="presentation"
                />
            </div>
            { toggleSearch }
            <img src="https://files.slack.com/files-pri/T758QBX47-F73JGEDLY/notificacoes.png?pub_secret=dabd98ee53" alt="notification" className="topbarNotification"/>
        </div>
      );
  }
}

export default Topbar;