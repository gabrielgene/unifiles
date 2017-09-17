import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';
import { Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
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
        <FloatingActionButton style={this.props.disable ? { display: 'none' } : {}} className="uploadButton" onClick={this.handleOpen}>
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
          <div className="fileModal">
            <h1>ARQUIVO:</h1>
          </div>
          <div className="modalInput">
            <input type="file" className="form-control" placeholder="Upload" />
          </div>
          <div className="subjectModal">
            <h1>DISCIPLINA:</h1>
          </div>
          <div className="selectWrapper">
            <div className="selectField">
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Cálculo I</option>
                  <option value="other">Bando de Dados </option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="category">
            <h1>CATEGORIA:</h1>
          </div>
          <div className="selectWrapper">
            <div className="selectField">
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Atividade</option>
                  <option value="select">Avaliação</option>
                  <option value="other">Apostila</option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="Landing-button">
            <Button block bsStyle="primary" bsSize="large" onClick={this.handleClose}><span className="Landing-button-text"> PUBLICAR </span></Button>
          </div>
        </Modal>
      </div>
    )
  }
}
