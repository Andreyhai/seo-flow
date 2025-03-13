import styles from "./ContactHeader.module.scss";
import phoneSVG from "../../../assets/phone.svg";
import emailSVG from "../../../assets/email.svg";
import facebook from '../../../assets/socials/facebook.svg'
import twiter from '../../../assets/socials/twiter.svg'
import inka from '../../../assets/socials/inka.svg'
import pint from '../../../assets/socials/pint.svg'


const ContactHeader = () => {

  const socials = [facebook, twiter, inka, pint]

  return (
    <section className={styles.ContactHeader}>
      <div className={styles.contactInfo}>
        <address className={styles.address}>
          <a href="tel:+1234567890" className={styles.contactLink}>
            <img src={phoneSVG} alt="phone" />
            <span className={styles.text}>+1 (234) 567-890</span>
          </a>
          <a href="mailto:example@example.com" className={styles.contactLink}>
            <img src={emailSVG} alt="email" />
            <span className={styles.text}>info@brandexponents.com</span>
          </a>
        </address>
      </div>

      <nav className={styles.socialIcons}>
      {socials.map((socialIcon) => {
        return (
          <a
          href="https://facebook.com"
          aria-label="Facebook"
        >
          <img className={styles.socialIcon} src={socialIcon} />
        </a>
        )
      })}
        
        
      </nav>
    </section>
  );
};

export default ContactHeader;
