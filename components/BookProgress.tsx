import styles from '@/styles/Start.module.css'
import font from '@/components/fonts'
import {useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


const BookProgress = ({progress}: {progress: number}) => {

  const steps = ['', '', '', ''];
  const [activeStep, setActiveStep] = useState(0);
  const [userinfo, setInfo] = useState<Array<string>>([]);
  const [dataName, setDataName] = useState("");
  const [dataNumber, setDataNumber] = useState("");
  const [dataEmail, setDataEmail] = useState("");
  const [dataPref, setDataPref] = useState("");
  const [dataType, setDataType] = useState("");
  const [dataIndustry, setDataIndustry] = useState("");
  const [dataAdditional, setDataAdditional] = useState("");

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
          <button onClick={() => {setInfo(["Flex"]); setActiveStep(1)}} className={styles.planbutton}> <div className={styles.flexrow}><h2 className={styles.planmaintext}>Flex</h2><p className={styles.planaddtext}>╺Starting at 350 with $15/mo subscription</p></div> <div className={styles.planpropertiescontainer}><h4 className={styles.planprop}>● Strategy discussion addressing goals.</h4><h4 className={styles.planprop}>● Website launch at your desired domain.</h4><h4 className={styles.planprop}>● A change per month to update services.</h4><h4 className={styles.planprop}>● Continuous website support.</h4></div> </button>
          <button onClick={() => {setInfo(["Managed"]); setActiveStep(1)}} className={styles.planbutton}> <div className={styles.flexrow}><h2 className={styles.planmaintext}>Managed</h2><p className={styles.planaddtext}>╺Starting at 500</p></div> <div className={styles.planpropertiescontainer}><h4 className={styles.planprop}>● Strategy discussion addressing goals.</h4><h4 className={styles.planprop}>● Website launch at your desired domain.</h4><h4 className={styles.planprop}>● Set up host accounts.</h4><h4 className={styles.planprop}>● All website code provided.</h4></div> </button>
          <button onClick={() => {setInfo(["Undecided"]); setActiveStep(1)}} className={styles.planbuttonalt}> <div className={styles.flexrow}><h4 className={styles.planalttext}>I'm not sure.</h4></div> </button>
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
        <h1 className={styles.primarytext}>{userinfo[0] == "Undecided" ? "No probelm," : `Great, we will discuss a ${userinfo[0]} plan.`}</h1>
        <h3 className={styles.secondarytext}> Let's get your contact information. </h3>
        <div className={styles.actioninterface}> 
          <TextField onChange={(event) => {setDataName(event.target.value)}} id="outlined-size-small" label="Name" size="small" style={{width: '50%', marginBlock: "10px"}} />
          <TextField onChange={(event) => {setDataNumber(event.target.value)}} id="outlined-size-small" label="Number" size="small" style={{width: '50%', marginBlock: "10px"}} />
          <TextField onChange={(event) => {setDataEmail(event.target.value)}} id="outlined-size-small" label="Email" size="small"  style={{width: '50%', marginBlock: "10px"}} />
          <FormControl >
            <FormLabel id="demo-row-radio-buttons-group-label">Preferred Contact Method</FormLabel>
            <RadioGroup onChange={(event) => {setDataPref(event.target.value)}} row aria-labelledby="row-radio-buttons-group" name="row-radio-buttons-group" >
              <FormControlLabel value="Text" control={<Radio />} label="Text" />
              <FormControlLabel value="Email" control={<Radio />} label="Email" />
            </RadioGroup>
          </FormControl>
          <Button onClick={() => { ;setActiveStep(2)}} className={styles.next} variant="outlined">Next</Button>
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
        <h1 className={styles.primarytext}> Thank you, {dataName}.</h1>
        <h3 className={styles.secondarytext}> Now about your business and website... </h3>
        <div className={styles.actioninterface}> 
          <h4>Will this be a personal or business website?</h4>
          <div className={styles.typecontainer}>
            <div className={(dataType == "Personal") ? styles.typebuttonactive : styles.typebutton} onClick={() => {setDataType("Personal")}}> Personal </div>
            <div className={(dataType == "Business") ? styles.typebuttonactive : styles.typebutton} onClick={() => {setDataType("Business")}}> Business </div>
          </div>
          <h4>What profession or industry will it be for?</h4>
          <TextField onChange={(event) => {setDataIndustry(event.target.value)}} id="outlined-size-small" label="Industry" size="small" style={{width: '50%', marginBlock: "10px"}} />
          <h4>Anything else we should know?</h4>
          <TextField onChange={(event) => {setDataAdditional(event.target.value)}} id="outlined-size-small" multiline rows={3} label="Additional info" size="small" style={{width: '70%', marginBlock: "10px"}} />
          <Button onClick={() => { ;setActiveStep(3)}} className={styles.next} variant="outlined">Next</Button>
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
        <h3 className={styles.secondarytext}> Before submitting, review your infomation below. </h3>
        <div className={styles.actioninterface}> 
          <div className={styles.datatext}><h4>Name:</h4><p> {dataName} </p></div>
          <div className={styles.datatext}><h4>Number:</h4><p> {dataNumber} </p></div>
          <div className={styles.datatext}><h4>Email:</h4><p> {dataEmail} </p></div>
          <div className={styles.datatext}><h4>Preferred Contact:</h4><p> {dataPref} </p></div>
          <div className={styles.datatext}><h4>Website type:</h4><p> {dataType} </p></div>
          <div className={styles.datatext}><h4>Industry:</h4><p> {dataIndustry} </p></div>
          <div className={styles.datatext}><h4>Additional comments:</h4><p> {dataAdditional} </p></div>
          <div style={{marginTop: "4vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Button onClick={() => { ;setActiveStep(4)}} className={styles.next} variant="outlined">Submit</Button></div>
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