import React from "react";
import styles from "./internship.module.css";
import { InternshipData } from "../../Data/InternshipData"; 

const InternshipExperience = () => {
  return (
    <div className={styles.internshipExperience} id="InternshipExperience">
      <div className={styles.internshipHeader}>
        <h1>Internship Experience</h1>
        <div>Explore our internship opportunities</div>
      </div>
      <div className={styles.internshipList}>
        {InternshipData.map((internship, index) => (
          <div key={index} className={styles.internshipItem}>
            <div className={styles.logoContainer}>
              <img src={internship.logoUrl} alt="Company Logo" />
              <div className={styles.overlayLink}>
                <a href={internship.certificateUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </div>
            </div>
            <h3>{internship.position} at {internship.company}</h3>
            <div className={styles.internshipDescription}>
              {internship.description}
            </div>
            <div className={styles.internshipDuration}>Duration: {internship.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipExperience;
