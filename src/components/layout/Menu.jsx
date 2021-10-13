import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => (
  <aside className={styles.Menu}>
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param/teste">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/not-found">Não existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu