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
import InfoItem from '../../components/Info';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css'

const fileIcon = <FileIcon />;
const messageIcon = <MessageIcon />;
const linkIcon = <LinkIcon />;

class Subject extends React.Component {

  render() {
    return (
      <div>
        <div className="topBar">
          <Topbar showSearch={false} />
          <SubjectName props={this.props} />
        </div>
        <div className="content">
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
              <Files props={this.props} />
              <Upload disable={false} />
            </TabPanel>
            <TabPanel>
              <Messages />
            </TabPanel>
            <TabPanel>
              <div className="infoItensTab">
                <InfoItem />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Subject;
