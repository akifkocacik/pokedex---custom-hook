import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        <Link to="/" className={classes.headerlink}>Home</Link>
    </div>
  )
}

export default Header