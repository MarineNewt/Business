import styles from '@/styles/Start.module.css'
import font from '@/components/fonts'
import {useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const BookProgress = ({progress}: {progress: number}) => {

  const steps = ['', '', '', ''];
  const [activeStep, setActiveStep] = useState(0);
  const [userinfo, setInfo] = useState([]);

  return (
    <div className={`${styles.fullpage} ${font.className}`}>
      {activeStep == 0 && <div className={styles.centercontainer}>
        <div className={styles.stepcontainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label} >
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <h1 className={styles.primarytext}>Let's get started!</h1>
        <h3 className={styles.secondarytext}> Do you have a website plan in mind? </h3>
        <div className={styles.actioninterface}> 
        
        </div>
      </div>}
      {activeStep == 1 && <div className={styles.centercontainer}>
        <div className={styles.stepcontainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label} >
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <h1 className={styles.primarytext}>Let's get started!</h1>
        <h3 className={styles.secondarytext}> Do you have a website plan in mind? </h3>
        <div className={styles.actioninterface}> 
        
        </div>
      </div>}
      {activeStep == 2 && <div className={styles.centercontainer}>
        <div className={styles.stepcontainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label} >
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <h1 className={styles.primarytext}>Let's get started!</h1>
        <h3 className={styles.secondarytext}> Do you have a website plan in mind? </h3>
        <div className={styles.actioninterface}> 
        
        </div>
      </div>}
      {activeStep == 3 && <div className={styles.centercontainer}>
        <div className={styles.stepcontainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label} >
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <h1 className={styles.primarytext}>Let's get started!</h1>
        <h3 className={styles.secondarytext}> Do you have a website plan in mind? </h3>
        <div className={styles.actioninterface}> 
        
        </div>
      </div>}
      {activeStep == 4 && <div className={styles.centercontainer}>
        <div className={styles.stepcontainer}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label} >
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <h1 className={styles.primarytext}>Let's get started!</h1>
        <h3 className={styles.secondarytext}> Do you have a website plan in mind? </h3>
        <div className={styles.actioninterface}> 
        
        </div>
      </div>}
    </div>
  );
};

export default BookProgress;