import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from '../Component/Introduction.jsx';
import Content from '../Component/Content.jsx';
import Last from '../Component/Last.jsx';

global.primaryColor = '#ffbd39';
global.windowBackgrounColor = '#f5f5f5';

ReactDOM.render(<Introduction/>, document.getElementById('containerOne'));
ReactDOM.render(<Content/>, document.getElementById('containerTwo'));
ReactDOM.render(<Last/>, document.getElementById('containerThird'));