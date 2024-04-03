import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'
import { useRouter } from 'next/navigation'
import backgroundimg from '@/public/images/background-action.jpg';


const ActionCall = ({}: {}) => {
  const router = useRouter()
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.background} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div>
      <button onClick={() => router.push('/start/plan')} className={styles.cta}> Launch your Website</button>

    </div>
  );
};

export default ActionCall;