import React from 'react'

import Normalize from 'react-normalize'
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../components/templates/App'

const Root = () => (
  <Router>
    <Normalize />
    <App />
  </Router>
)

export default Root;
