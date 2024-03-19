import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'
import backgroundimg from '@/public/images/background-action.jpg';

const ActionCall = ({}: {}) => {
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.background} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>
      <button className={styles.cta}> Launch your Website</button>

    </div>
  );
};

export default ActionCall;