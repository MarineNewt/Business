import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'
import { useRouter } from 'next/navigation'

const HomePage = ({}: {}) => {
  const router = useRouter()
  return (
    <div className={styles.fullpage}>
        <h1 className={`${styles.title} ${font.className}`}> Elevated Website Design <br/> & Branding Development</h1>
        <h3 className={`${styles.heading} ${font.className}`}>Custom Websites for everyone, tailored to you and your needs.</h3>
        <button onClick={() => router.push('/start/plan')} className={styles.ctabutton}> Start Application</button>
        
    </div>
  );
};

export default HomePage;