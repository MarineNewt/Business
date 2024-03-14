import styles from '@/styles/Home.module.css'
import backgroundimg from '@/public/images/background-showcase.jpg'

const ShowcasePage = ({}: {}) => {
  return (
    <div className={styles.fullpagesolid}>
      <div className={styles.background} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>
      <div className={styles.showcasecontainer}>
        <div className={styles.showcaseouter}>
          <div className={styles.showcaseblock1}></div>
          <div className={styles.showcaseblock2}></div>
        </div>
        <div className={styles.showcaseouter2}>
          <div className={styles.showcaseinner}>
              <div className={styles.showcaseblock3}></div>
              <div className={styles.showcaseblock4}></div>
          </div>
          <div className={styles.showcaseblock5}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;