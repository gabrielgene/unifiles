import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import Subject from './pages/Subject';
import Home from './pages/Home';
import File from './pages/File';
import './index.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/materia/:subject" component={Subject} />
      <Route path="/materia/:subject/:id" component={File} />
      <Redirect path="**" to="/" />
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
