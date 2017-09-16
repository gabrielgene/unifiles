import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import File from './pages/File';
import Home from './pages/Home';
import './index.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/file" component={File} />
      <Redirect path="**" to="/" />
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
