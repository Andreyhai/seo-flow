import styles from "./NavigationHeader.module.scss";

import logo from '../../../assets/logo.svg'

const NavigationHeader = () => {
  return (
    <section className={styles.NavigationHeader}>
      <h1 className={styles.logo}>
        <a href="/" aria-label="На главную">
          <img src={logo} alt={logo} />
        </a>
      </h1>

      <nav aria-label="Главное меню">
          <ul className={styles.navigation}>
            <li className={styles.navigationLink}><a href="#">Home</a></li>
            <li className={styles.navigationLink}><a href="#">Services</a></li>
            <li className={styles.navigationLink}><a href="#">Team</a></li>
            <li className={styles.navigationLink}><a href="#">Pricing</a></li>
            <li className={styles.navigationLink}><a href="#">Blog</a></li>
            <li className={styles.navigationLink}><a href="#">Contact</a></li>
          </ul>
        </nav>

        <a className={styles.button} href="#">Enquiry</a>
    </section>
  );
};

export default NavigationHeader;
