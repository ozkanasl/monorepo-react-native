import React from 'react';
import ReactDOM from 'react-dom';
import setup from 'shared/src/setup';
import App from './App';

const Root = setup( App );

ReactDOM.render( <Root />, document.getElementById( 'root' ) );

