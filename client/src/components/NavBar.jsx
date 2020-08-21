import React from 'react'
import { Link } from 'react-router-dom';
import { styles } from './css/nav.module.css'

function NavBar() {

    return (
        <ul>
             <li><Link to="/restaurants/add" className={ styles }>ADD YOUR RESTUARANT</Link></li>
        </ul>
    )
}

export default NavBar
