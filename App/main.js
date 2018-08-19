import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../Component/Pages/Index.jsx';
import registerServiceWorker from './registerServiceWorker.js';

global.primaryColor = '#ffbd39';
global.windowBackgrounColor = '#f5f5f5';

// for responsive
global.maxWidth = "(max-width: 700px)";
global.minWidth = "(min-width: 700px)";

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();