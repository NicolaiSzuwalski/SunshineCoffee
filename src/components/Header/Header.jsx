import React from "react";
import styles from "./Header.module.scss";
import Coffee from "../../assets/images/Coffee.png";
import CoffeeBg from '../../assets/images/CoffeeBg.png';

export const Header = () => {
  return (
    <header>
      <div className={styles.HeaderCont}>
        <div className={styles.Circle}>
          <div className={styles.CoffeeCont}>
            <h2>Sunshine Coffee</h2>
            <img
              className={styles.Coffee}
              src={Coffee}
              alt="DoesAnybodyWantCoffee?!"
            />
          </div>
        </div>
      </div>
      <div className={styles.HeaderBg}>
        <div>
        <img src={CoffeeBg} alt="CoffeeBackground" />
        <h1>We Love Coffee <br/>  And all the people who make it </h1>
        </div>
      </div>
    </header>
  );
};