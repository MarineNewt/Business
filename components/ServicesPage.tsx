import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'

const ServicesPage = ({}: {}) => {
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.plantitle}>Services</div>
      <div className={styles.servicescontainer}>
        <div className={styles.servicebox}>
          <h2 className={styles.servicetitle}>Flex</h2>
          <p className={styles.serviceinfotext}>Starting at 500</p>
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
          <p className={styles.serviceinfotext}>Starting at 300</p>
          <p className={styles.serviceinfotext}> With $12/Mo subscription</p>
          <div className={styles.servicedetails}>
            <p>● Strategy discussion addressing your goals</p>
            <p>● Modern eye-catching website design</p>
            <p>● Full handling of website launch  at your desired domain as well as continued maintenance.</p>
            <p>● 3 comprehensive revisions applicable for any part of the design process</p>
            <p>● Continued website support.</p>
            <p>● Ability to make 1 change per month to update services, offerings, or information.</p>
          </div>
          <p className={styles.serviceinfotext2}>*Optimal for small businesses just starting out and iterating upon their services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;