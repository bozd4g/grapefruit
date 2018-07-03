import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from '../Component/Introduction.jsx';
import Content from '../Component/Content.jsx';
import Last from '../Component/Last.jsx';

ReactDOM.render(<Introduction backgroundColor="#f2f2f2"/>, document.getElementById('containerOne'));
ReactDOM.render(<Content backgroundColor="#ffbd39"/>, document.getElementById('containerTwo'));
ReactDOM.render(<Last backgroundColor="#f2f2f2"/>, document.getElementById('containerThird'));