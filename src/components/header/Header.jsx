import ContactHeader from "./contact-header/ContactHeader";
import NavigationHeader from "./navigation-header/NavigationHeader";
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ContactHeader />
        <NavigationHeader />
      </div>
    </header>
  );
};

export default Header;
