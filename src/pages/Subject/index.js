import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import LinkIcon from 'material-ui/svg-icons/content/link';
import Upload from '../../components/Upload';
import Files from '../../components/Files';
import Topbar from '../../components/Topbar';
import SubjectName from '../../components/SubjectName';
import './style.css'

const fileIcon = <FileIcon />;
const messageIcon = <MessageIcon />;
const linkIcon = <LinkIcon />;

class Subject extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Topbar showSearch={false} />
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
            <span>Mensaggens</span>
          </Tab>
          <Tab
            icon={linkIcon}
          >
            <span>Links</span>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Subject;
