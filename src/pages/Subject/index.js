import React from 'react';
// import { Tabs, Tab } from 'material-ui/Tabs';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import LinkIcon from 'material-ui/svg-icons/content/link';
import Upload from '../../components/Upload';
import Files from '../../components/Files';
import Messages from '../../components/Files/messages';
import Topbar from '../../components/Topbar';
import SubjectName from '../../components/SubjectName';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css'

const fileIcon = <FileIcon />;
const messageIcon = <MessageIcon />;
const linkIcon = <LinkIcon />;

class Subject extends React.Component {

  render() {
    return (
      <div>
        <Topbar showSearch={false} />
        <SubjectName />
        <Tabs>
    <TabList>
      <Tab>
        <div className="tab-text col-md-4">
          ARQUIVOS
        </div>
      </Tab>
      <Tab>
        <div className="tab-text col-md-4">
          DISCUSSÕES
        </div>
      </Tab>
      <Tab>
        <div className="tab-text col-md-4 tab-info">
          INFO
        </div>
      </Tab>
    </TabList>

    <TabPanel>
      <Files />
    </TabPanel>
    <TabPanel>
      <Messages />
    </TabPanel>
    <TabPanel>
      <div>
        <h3> CHupa GEne </h3>
      </div>
    </TabPanel>
  </Tabs>
      </div>
    );
  }
}

export default Subject;
