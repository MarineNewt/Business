import styles from '@/styles/Home.module.css'

const ServicesPage = ({}: {}) => {
  return (
    <div className={styles.fullpage2}>
      <div>
        <div>
          <h2>Flex</h2>
          <p>Starting at 500</p>
          <p>One time price</p>
          <div>
            Strategy discussion addressing your goals
            Custom eye-catching website design using modern visuals
            Handling of website launch at your desired domain.
            All website code provided along with set up host accounts to offer flexibility in future changes.
            3 comprehensive revisions applicable for any part of the design process
            30 days technical support and additional revision period
          </div>
          <p>*Optimal for established businesses with solidified services and long term goals.</p>
        </div>
        <div>
          <h2>Managed</h2>
          <p>Starting at 300</p>
          <p> With 12/Mo subscription</p>
          <div>
            Strategy discussion addressing your goals
            Custom eye-catching website design using modern visuals
            Full handling of website launch  at your desired domain as well as continued maintenance.
            3 comprehensive revisions applicable for any part of the design process
            Continued website support.
            Ability to make 1 change per month to update services, offerings, or information.
          </div>
          <p>*Optimal for small businesses just starting out and iterating upon their services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;