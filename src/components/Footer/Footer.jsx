import React from 'react'
import FooterImg from '../../assets/images/Footer.png'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer>
        <div className={styles.FooterMain}>

              <div>
                <p>Contact</p>
                <br />
                <p>Supercoffeeroad 223b</p>
                <p>92230 New Coffeland</p>
                <p>Phone : 22331122</p>
                <p>Mail : coffeeland@info.com</p>
              </div>

              <div>
                <p>Legal</p>
                <br />
                <p>Cookie policy</p>
                <p>Return policy</p>
                <p>Shipping</p>
                <p>Terms and Conditions</p>
              </div>

              <div>
                <p>About</p>
                <br />
                <p>History</p>
                <p>The people behind</p>
                <p>Partnerships</p>
                <p>International</p>
              </div>
        </div>
    </footer>
  )
}
