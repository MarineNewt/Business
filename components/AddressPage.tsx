import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'

const AddressPage = ({}: {}) => {
  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <h1 className={styles.addtitle}>Its time to present your passion to the world.</h1>
      <h3 className={styles.addheading}>You put your heart and soul into growing yourself. But without visibility or an online presence it's easy for efforts to fall short, limiting you from your full potential. That's where we step in. Our services are designed to elevate your brand and build a website that works tirelessly for you, ensuring that your business not only stands out but also connects effectively with your target audience. Let us help you transform your hard work into measurable success, making your business more accessible, credible, and elegant.</h3>
    </div>
  );
};

export default AddressPage;