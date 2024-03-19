import * as React from 'react';
import styles from '@/styles/Home.module.css';
import font from '@/components/fonts'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const FAQSlice = ({}: {}) => {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={`${styles.fullpagesolid} ${font.className}`}>
      <h2 className={styles.faqtitle}>FAQ</h2>
      <div className={styles.faq}>
      <Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What do you need from me to get started?
        </AccordionSummary>
        <AccordionDetails>
          The required materials vary project to project depending on the scope of the website and desired functionality. Commonly requested items include services offered, portfolio images, bios, and information of how you handle client communication.
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Will my website be mobile-friendly?
        </AccordionSummary>
        <AccordionDetails>
          Absolutely! All websites will be made dynamically to appear and function across a range of devices including mobile phones.
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can I update the website myself after it is built?
        </AccordionSummary>
        <AccordionDetails>
          For Flex plans the entirety of the website code will be provided to you allowing for full control of future changes. For Managed plans these changes can be requested and made for you. 
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can you integrate social media and other 3rd party tools?
        </AccordionSummary>
        <AccordionDetails>
          Of course, if there are 3rd party tools you want visible on your website bring up these features within your application and our discussion then we will be sure to include them in the final product!
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How long does the process take?
        </AccordionSummary>
        <AccordionDetails>
          The typical development time of your webstie will be between 3-6 weeks. For short and sweet projects with simple landing pages we aim to deliver even earlier sometimes within just 1 week. During our disscussion a more precise time can be provided once the details of your website are determined.
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};

export default FAQSlice;