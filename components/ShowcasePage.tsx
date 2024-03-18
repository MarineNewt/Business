import styles from '@/styles/Home.module.css';
import font from '@/components/fonts'
import backgroundimg from '@/public/images/background-showcase.jpg';
import showcaseimg1 from '@/public/images/showcase/showcase1.png';
import showcaseimg2 from '@/public/images/showcase/showcase4.png';
import showcaseimg3 from '@/public/images/showcase/showcase3.png';
import showcaseimg4 from '@/public/images/showcase/showcase4.png';
import showcaseimg5 from '@/public/images/showcase/showcase5.png';

const ShowcasePage = ({}: {}) => {
  return (
    <div className={styles.fullpagesolid}>
      <div className={styles.background} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>
      <div className={styles.showcasecontainer}>
        <div className={styles.showcaseouter}>
          <a className={styles.showcaseblock1} style={{backgroundImage: `url(${showcaseimg1.src})`}} href="https://www.newt9.dev/" target="_blank" rel="noopener noreferrer"></a>
          <div className={`${styles.showcaseblock2} ${font.className}`}>SHOW <br></br> CASE</div>
        </div>
        <div className={styles.showcaseouter2}>
          <div className={styles.showcaseinner}>
              <a className={styles.showcaseblock3} style={{backgroundImage: `url(${showcaseimg3.src})`}} href="https://www.newt9.dev/" target="_blank" rel="noopener noreferrer"></a>
              <a className={styles.showcaseblock4} style={{backgroundImage: `url(${showcaseimg4.src})`}} href="https://www.newt9.dev/" target="_blank" rel="noopener noreferrer"></a>
          </div>
          <a className={styles.showcaseblock5} style={{backgroundImage: `url(${showcaseimg5.src})`}} href="https://www.newt9.dev/" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;