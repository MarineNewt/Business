import styles from '@/styles/Start.module.css'
import font from '@/components/fonts'
import {useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const BookProgress = ({progress}: {progress: number}) => {

  const steps = ['', '', '', ''];
  const [activeStep, setActiveStep] = useState(0);
  const [userinfo, setInfo] = useState<Array<string>>([]);

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
          <button onClick={() => {setInfo(["Flex"]); setActiveStep(1)}}> Flex </button>
          <button onClick={() => {setInfo(["Managed"]); setActiveStep(1)}}> Managed </button>
          <button onClick={() => {setInfo(["Undecided"]); setActiveStep(1)}}> I'm not sure </button>
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
        <h1 className={styles.primarytext}>{userinfo[0] == "Undecided" ? "No probelm," : "Great, "}</h1>
        <h3 className={styles.secondarytext}> Let's get your contact information. </h3>
        <div className={styles.actioninterface}> 
          <button onClick={() => { ;setActiveStep(2)}}> Next </button>
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
        <h1 className={styles.primarytext}> Thank you, </h1>
        <h3 className={styles.secondarytext}> Now about your business and website... </h3>
        <div className={styles.actioninterface}> 
          <button onClick={() => { ;setActiveStep(3)}}> Next </button>
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
        <h1 className={styles.primarytext}>Perfect!</h1>
        <h3 className={styles.secondarytext}> Before submitting review your infomation below. </h3>
        <div className={styles.actioninterface}> 
          <button onClick={() => { ;setActiveStep(4)}}> Next </button>
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
        <h1 className={styles.primarytext}>Submission recieved!</h1>


      </div>}
    </div>
  );
};

export default BookProgress;