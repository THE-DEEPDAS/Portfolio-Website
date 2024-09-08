import React from 'react';
import './About.css'; 
import myImage from './Assets/my_img.jpg';

const About = () => {
    return (
        <div className="about-page">
            <div className="background-image"></div>
            <div className="page-content">
                <h1>About Me</h1>
                
                <div className="image-container">
                    <img 
                        src={myImage} 
                        alt="Profile" 
                        className="profile-image" 
                    />
                </div>

                <section className="personal-info">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> Deep Das</p>
                    <p><strong>Contact:</strong> u23ai052@coed.svnit.ac.in</p>
                    <p><strong>Location:</strong> Surat, India</p>
                    <p><strong>Education:</strong> B.Tech in Artificial Intelligence, SVNIT</p>
                    <p><strong>Biography:</strong> I am a dedicated B.Tech student specializing in Artificial Intelligence at SVNIT. With a strong foundation in programming and problem-solving, I am passionate about advancing technology and applying my skills to real-world challenges. I continuously seek opportunities to learn and grow in the fields of AI and software development.</p>
                </section>
                
                <section className="hobbies-interests">
                    <h2>Hobbies and Interests</h2>
                    <p>My primary interest lies in research and continual learning. I am also passionate about applying my skills through various projects, which helps me implement and hone the skills I’ve acquired. Outside of academics, I enjoy exploring new technologies and contributing to innovative solutions.</p>
                </section>

                <section className="skills">
                    <h2>Skills</h2>
                    <ul>
                    <li className="skill-item">JavaScript</li>
                    <li className="skill-item">React</li>
                    <li className="skill-item">Python</li>
                    <li className="skill-item">Data Structures and Algorithms</li>
                    <li className="skill-item">Competitive Programming</li>
                    <li className="skill-item">HTML & CSS</li>
                    <li className="skill-item">Bootstrap</li>
                    <li className="skill-item">Tailwind CSS</li>
                    <li className="skill-item">WordPress</li>
                    <li className="skill-item">Webflow</li>
                    <li className="skill-item">C++</li>
                    <li className="skill-item">C</li>
                    <li className="skill-item">Prompt Engineering</li>
                    <li className="skill-item">Drone Making</li>
                    </ul>
                </section>

                <section className="status">
                    <h2>Status</h2>
                    <p>I am actively seeking research projects, internships, and opportunities to collaborate on innovative projects. Feel free to connect with me through the social links provided or reach out via the contact page.</p>
                </section>
                
                <section className="profile-links">
                    <h2>Profile Links</h2>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/deep-das-4b5aa527b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/THE-DEEPDAS" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    <p><strong>Portfolio:</strong> <a href="https://deepdas-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio Website</a></p>
                </section>
                
            </div>
        </div>
    );
};

export default About;
