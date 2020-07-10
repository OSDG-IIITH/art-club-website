import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Heading/>
    <Content/>
  </div>,
  document.getElementById("root")
);
