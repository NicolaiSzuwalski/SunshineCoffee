import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import Cart from '../../assets/images/ShoppingCart.png'
import User from '../../assets/images/User.png'
import { Header } from '../Header/Header'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <ul>
          <NavLink><li className={styles.Europa}>Europa</li></NavLink>

          <NavLink><li>
            <img src={Cart} alt="ShoppingCart" />
          </li></NavLink>

          <NavLink><li>
            <img src={User} alt="User" />
          </li></NavLink>
        </ul>
    </nav>
  )
}
