import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import LinkIcon from 'material-ui/svg-icons/content/link';
import Upload from '../../components/Upload';
import Files from '../../components/Files';
import Topbar from '../../components/topbar';
import SubjectName from '../../components/SubjectName';
import './style.css'

const fileIcon = <FileIcon />;
const messageIcon = <MessageIcon />;
const linkIcon = <LinkIcon />;

class Subject extends React.Component {

  render() {
    return (
      <div>
        <Topbar />
        <SubjectName />
        <Tabs>
          <Tab
            icon={fileIcon}
          >
            <div>
              <Files />
              <Upload />
            </div>
          </Tab>
          <Tab
            icon={messageIcon}
          >
            <h1>Mensaggens</h1>
          </Tab>
          <Tab
            icon={linkIcon}
          >
            <h1>Links</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Subject;
