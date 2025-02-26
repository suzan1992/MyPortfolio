// Home.jsx
import React from 'react';
import App from './Hero';
import About from './About';
import WorkExperience from '../components/WorkExperience/WorkExperience'; 
import SkillDisplay from './SkillDisplay';  // Example of using the SkillDisplay componen
import ServiceDisplay from './ServiceDisplay';
import HappyClients from './HappyClients'; 



const Home = () => {
    return (
        <div>
            <App />
            <About />
            <WorkExperience />
            <SkillDisplay />
            <ServiceDisplay />
            <HappyClients />
            {/* <Testimonials /> */}
        </div>
    );
};

export default Home;