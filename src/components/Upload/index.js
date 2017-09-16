import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';
import './style.css';


export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
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
        <Dialog
          title="Upload"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Faça upload dos seus arquivos aqui.
    </Dialog>
      </div>
    )
  }
}
