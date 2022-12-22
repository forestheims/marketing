import React from 'react';
import { NavLink } from 'react-router-dom';
import TechStack from '../TechStack/TechStack';
import styles from './AboutDev.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>About me, as a Web Developer</h2>
        <TechStack />
        <p className={styles.Paragraph}>
          I am looking for a position as a Web Developer or Full Stack Software
          Engineer at a company with ethical integrity. I am a curious person
          and enjoy developing software iteratively. Experimentation and
          discovery make me light up with ideas, and I function best when given
          the opportunity to use analytical and critical thinking to solve
          problems.
        </p>
        <p className={styles.Paragraph}>
          My experience is in planning, designing, and building web apps as
          sprint projects while using agile methodologies. I love
          collaboratively working on software with people. My personable nature
          and ability to listen deeply are skills that I always bring to any
          team.
        </p>
        <p className={styles.Paragraph}>
          I would love to work in video game development or on computational
          chemistry software someday, but for now I am just trying to get my
          foot in the door to the software engineering field. I also have
          interest in Sysadmin, Cybersecurity, and DevOps roles. Check out the{' '}
          <NavLink className={styles.AboutLink} to="projects">
            projects
          </NavLink>{' '}
          link to see the web apps I have worked on. Or check out the{' '}
          <NavLink className={styles.AboutLink} to="contact">
            contact
          </NavLink>{' '}
          link for links to my resume, email, GitHub, and LinkedIn.
        </p>
      </article>
    </div>
  );
}
