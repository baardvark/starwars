import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
