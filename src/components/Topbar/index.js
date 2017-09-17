import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import Search from '../Search';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import { withRouter } from 'react-router';
import './topbar.css'

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, modal: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
      const showSearch = this.props.showSearch;
      const topbarSearchButton = <img className="topbarSearchButton" src="https://files.slack.com/files-pri/T758QBX47-F7486JL8J/lupa.png?pub_secret=c96be253b3" alt="SearchButton" />
      const toggleSearch = showSearch ? <Search placeholder="O que você procura?" /> : topbarSearchButton;
    return (
      <div className="Header">
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Menu>
            <Divider />
            <MenuItem
              onClick={() => {
                this.props.router.push('/')
                this.setState({ open: false })
              }
              }
              primaryText="Inicio"
            />
            <Divider />
            <MenuItem
              primaryText="Favoritos"
              onClick={() => {
                this.props.router.push('/')
                this.setState({ open: false })
              }
              }
            />
            <Divider />
            <MenuItem
              primaryText="Perfil"
              onClick={() => {
                this.props.router.push('/')
                this.setState({ open: false })
              }
              }
            />
            <Divider />
            <MenuItem
              primaryText="Configurações"
              onClick={() => {
                this.props.router.push('/')
                this.setState({ open: false })
              }
              }
            />
            <Divider />
            <MenuItem
              primaryText="Sobre"
              onClick={() => {
                this.props.router.push('/')
                this.setState({ open: false })
              }
              }
            />
            <Divider />
          </Menu>
        </Drawer>
        <div className="Logo">
          <img style={{ height: 50, position: 'fixed', left: 8, top: 6 }} src="https://files.slack.com/files-pri/T758QBX47-F7493T16E/menu_burger.png?pub_secret=22fb95f193" alt="menu" onClick={this.handleToggle} />
          <img
            className="Logo-img"
            src="//files.slack.com/files-pri/T758QBX47-F7481B736/marca_big.png"
            role="presentation"
            onClick={() => this.props.router.push('/')}
          />
        </div>
        {toggleSearch}
        <img src="https://files.slack.com/files-pri/T758QBX47-F73JGEDLY/notificacoes.png?pub_secret=dabd98ee53" alt="notification" className="topbarNotification" />
      </div>
    );
  }
}

export default withRouter(Topbar);
