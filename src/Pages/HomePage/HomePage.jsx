import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { Header } from '../../components/Header/Header.jsx'
import { NavLink } from 'react-router-dom'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <>
    <Header></Header>
    <div className={styles.ShopNow}>
      <h2>Shop now</h2>
      <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
      <NavLink to='/Products'><button>Go to Products</button></NavLink>
    </div>
    </>
  )
}
