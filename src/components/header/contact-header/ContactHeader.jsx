import styles from "./ContactHeader.module.scss";
import phoneSVG from "../../../assets/phone.svg";
import emailSVG from "../../../assets/email.svg";


const ContactHeader = () => {
  return (
    <section className={styles.ContactHeader}>
      <div className={styles.contactInfo}>
        <address className={styles.address}>
          <a className={styles.contactLink}>
            <img src={phoneSVG} alt="phone" />
            <span className={styles.text}>Телефон: +1 (234) 567-890</span>
          </a>
          <a className={styles.contactLink}>
            <img src={emailSVG} alt="email" />
            <span className={styles.text}>Телефон: +1 (234) 567-890</span>
          </a>
        </address>
      </div>

      <nav className={styles.socialIcons}>
        
      </nav>
    </section>
  );
};

export default ContactHeader;
