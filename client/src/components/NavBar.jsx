import React from 'react'
import { Link } from 'react-router-dom';
import { styles } from './css/nav.module.css'

function NavBar() {

    return (
        <ul>
             <li><Link to="/restaurants/add" className={ styles }>Add Your Restaurant</Link></li>
        </ul>
    )
}

export default NavBar
