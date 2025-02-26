import React from 'react';
import styles from './WorkExperience.module.css'; // Import CSS module

const Job = ({ job }) => {
    return (
        <div className={styles.job}>
            <div className={styles.jobHeader}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobCompany}>
                    <strong>{job.company}</strong>
                </p>
                <p className={styles.jobDates}>{job.dates}</p>
            </div>
            <div className={styles.jobDetails}>
                <ul className={styles.jobDescription}>
                    {job.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Job;