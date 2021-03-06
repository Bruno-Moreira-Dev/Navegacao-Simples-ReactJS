import React from 'react';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  )
}

export default App;