import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';
import { Modal, FormControl } from 'react-bootstrap';
import './style.css';


export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    return (
      <div>
        <FloatingActionButton className="uploadButton" onClick={this.handleOpen}>
          <UploadIcon />
        </FloatingActionButton>
        <Modal show={this.state.open} onHide={this.handleClose} className="modal">
          <img className="close" src="https://files.slack.com/files-pri/T758QBX47-F746PKCD9/fechar_x.png?pub_secret=95821050f3" alt="close" onClick={this.handleClose} />
          <div className="imageFile">
            <img src="https://files.slack.com/files-pri/T758QBX47-F73P0V2V7/upload.png?pub_secret=d68398905e" alt="file" />
          </div>
          <div className="modalTitle">
            <h1>SUBIR ARQUIVO</h1>
          </div>
          <div className="modalSubtitle">
            <h1>Confirme as informações do arquivo:</h1>
          </div>
          <input type="file" placeholder="Upload" />
        </Modal>
      </div>
    )
  }
}
