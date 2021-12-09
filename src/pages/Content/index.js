
import React from 'react';
import { render } from 'react-dom';

import Content from './Content.jsx';
import './Content.css';

render(
  <Content />,
  document.body.appendChild(document.createElement("DIV"))
)