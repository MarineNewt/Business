import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'
import { useRouter } from 'next/navigation'
import strategylogo from '@/public/images/icons/plan-icon.png'
import designlogo from '@/public/images/icons/design-icon.png'
import refinelogo from '@/public/images/icons/refine-icon.png'


const PlanPage = ({}: {}) => {
  const router = useRouter()
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <div className={styles.plantitle}>How it works</div>
      <div className={styles.placontainer}>
        <div className={styles.plansection}>
          <h2 className={styles.planheading}>Strategy</h2>
          <img className={styles.planicon} src={strategylogo.src} alt="Strategy"/>
          <p className={styles.plansubtext}>We start off with a discussion regarding your goals and desired features. The better we know your objectives the faster we can connect your audience to your services.</p>
        </div>
        <div className={styles.plansection}>
          <h2 className={styles.planheading}>Design</h2>
          <img className={styles.planicon} src={designlogo.src} alt="Design"/>
          <p className={styles.plansubtext}>Next, we follow a 3 step building process of creating a Wireframe, landing page, and full site. We provide deliverables at each step, accepting feedback and revisions to ensure complete satisfaction.</p>
        </div>
        <div className={styles.plansection}>
          <h2 className={styles.planheading}>Refine</h2>
          <img className={styles.planicon} src={refinelogo.src} alt="Refine"/>
          <p className={styles.plansubtext}>The finished website will be completely launched for you. You will have full technical support and the opportunity for final revisions for up to 30 days following the date of completion.</p>
        </div>
      </div>
      <button onClick={() => router.push('/start/plan')} className={styles.ctaplan}>Get Started</button>
    </div>
  );
};

export default PlanPage;