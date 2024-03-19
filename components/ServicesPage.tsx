import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'

const ServicesPage = ({}: {}) => {
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.servicestitle}>Services</div>
      <div className={styles.servicescontainer}>
        <div className={styles.servicebox}>
          <h2 className={styles.servicetitle}>Flex</h2>
          <p className={styles.serviceinfotext}>Starting at 500 USD</p>
          <p className={styles.serviceinfotext}>One time price</p>
          <div className={styles.servicedetails}>
            <p>● Strategy discussion addressing goals.</p>
            <p>● Modern eye-catching website design.</p>
            <p>● Website launch at your desired domain.</p>
            <p>● All website code provided.</p>
            <p>● Set up Host accounts.</p>
            <p>● 3 comprehensive revisions.</p>
            <p>● 30 days continued technical support.</p>
          </div>
          <p className={styles.serviceinfotext2}>*Optimal for established businesses with solidified services and long term goals.</p>
        </div>
        <div className={styles.servicebox}>
          <h2 className={styles.servicetitle}>Managed</h2>
          <p className={styles.serviceinfotext}>Starting at 350 USD</p>
          <p className={styles.serviceinfotext}> With $12/Mo. subscription</p>
          <div className={styles.servicedetails}>
            <p>● Strategy discussion addressing goals</p>
            <p>● Modern eye-catching website design</p>
            <p>● Website launch at your desired domain.</p>
            <p>● Continued website maintenance.</p>
            <p>● 3 comprehensive revisions.</p>
            <p>● Continuous website support.</p>
            <p>● Ability to make 1 change per month to update services, offerings, or information.</p>
          </div>
          <p className={styles.serviceinfotext2}>*Optimal for small businesses just starting out and iterating upon their services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;