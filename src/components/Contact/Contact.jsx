import styles from './Contact.css';
import linkedInLogo from '../../../public/images/LI-In-Bug.png';
import gitHubLogo from '../../../public/images/GitHub-Mark-Light-64px.png';
import pdfPng from '../../../public/images/pdf.png';
import resumeDisco from '../../../public/resume/resume-disco.mp4';
import { motion } from 'framer-motion';
import useForm from '../../hooks/useForm';

export default function Contact() {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formState :>> ', formState);
  };

  return (
    <div className={styles.Contact}>
      <motion.iframe
        className={styles.changingPdf}
        src={resumeDisco}
        animate={{
          scale: [0.1, 1, 1, 1, 1, 1, 1, 0.75, 0.1],
          x: [0, 0, 0, 0, 0, 0, 0, -220],
          y: [-20, -20, -20, -20, -20, -20, -20, -310],
          borderRadius: ['10%', '0%', '0%', '0%', '0%', '0%', '10%', '10%'],
          opacity: [0, 1, 1, 1, 1, 1, 1, 0],
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{
          duration: 5,
        }}
      />
      <a href="/resume/dark-mode-resume.pdf" target="_blank">
        <img src={pdfPng} alt="pdf symbol" />
        View / Download my Resume
      </a>
      <a href="mailto:forestheims@gmail.com" target="_blank">
        <h2>📧</h2>
        forestheims@gmail.com
      </a>
      <a href="https://github.com/forestheims" target="_blank">
        <img src={gitHubLogo} alt="github logo" />
        github.com/forestheims
      </a>
      <a href="https://www.linkedin.com/in/forestheims/" target="_blank">
        <img src={linkedInLogo} alt="linkedin logo" />
        linkedin.com/in/forestheims
      </a>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Or, you can leave me a message here:</h3>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleFormChange(e)}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            value={formState.message}
            onChange={(e) => handleFormChange(e)}
          />
        </label>
        {formError && <p>Error: {formError}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
