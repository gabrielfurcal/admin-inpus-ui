import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/trains"}>Trains</Link></li>
        </ul>
    </nav>
  )
}

export default Menu;