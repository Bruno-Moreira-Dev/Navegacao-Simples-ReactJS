import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'
import styles from './Content.module.css'

const Content = () => (
  <main className={styles.Content}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/param/:id">
        <Param />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
)

export default Content