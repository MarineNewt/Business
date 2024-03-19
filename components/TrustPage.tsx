import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'
import backgroundimg from '@/public/images/background-trust.jpg';

const TrustPage = ({}: {}) => {
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.background} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>

    </div>
  );
};

export default TrustPage;