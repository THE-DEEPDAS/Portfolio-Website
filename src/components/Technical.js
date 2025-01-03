import React from 'react';
import ImageCard from './ImageCard';
import './Technical.css';

const Technical = () => {
    // Experience data (grouped like projects)
    const experiences = [
        {
            image: [
                require('./Assets/greatnotes1.png'),
                require('./Assets/greatnotes2.png'),
                require('./Assets/greatnotes3.png'),
                require('./Assets/greatnotes4.png'),
                require('./Assets/greatnotes5.png'),
                require('./Assets/greatnotes6.png'),
            ],
            title: 'GreatNotes',
            description: 'This was my first commercially deployed project, showcasing my skills in full-stack development and project management.',
        }
    ];

    // Other projects
    const projects = [
        {
            image: [
                require('./Assets/Avishkaar1.png'),
                require('./Assets/Avishkaar2.png'),
                require('./Assets/Avishkaar3.png'),
                require('./Assets/Avishkaar4.jpg'),
                require('./Assets/Avishkaar5.jpg'),
            ],
            title: 'GeeksForGeeks Hackathon',
            description: 'Excited to share that we secured 3rd runners up position in a national level GeeksForGeeks powered Avishkaar hackathon in season 2 at AITAM.',
        },
        {
            image: [
                require('./Assets/portfolio1.png'),
                require('./Assets/portfolio2.png'),
                require('./Assets/portfolio3.png'),
                require('./Assets/portfolio4.png'),
                require('./Assets/portfolio5.png'),
                require('./Assets/portfolio6.png'),
            ],
            title: 'PORTFOLIO WEBSITE',
            description: '🌐 Showcased my web development skills with a fully responsive and interactive portfolio website. Built with React and EmailJs. 🚀',
        },
        {
            image: [
                require('./Assets/capify1.png'),
                require('./Assets/capify2.png'),
                require('./Assets/capify3.png'),
                require('./Assets/capify4.png'),
                require('./Assets/capify5.png'),
                require('./Assets/capify6.png'),
                require('./Assets/capify7.png'),
                require('./Assets/capify8.png'),
            ],
            title: 'CAPIFY FINANCE PROJECT',
            description: '📊 Developed a finance management tool to track expenses and investments. Implemented real-time data visualization using React and Chart.js. 💹 capify.vercel.app',
        },
        {
            image: [
                require('./Assets/agrowe1.png'),
                require('./Assets/agrowe2.png'),
                require('./Assets/agrowe3.png'),
                require('./Assets/agrowe4.png'),
                require('./Assets/agrowe5.png'),
                require('./Assets/agrowe6.png'),
            ],
            title: 'Agro We AGRICULTURAL PROJECT',
            description: '🌱 Created a platform to support agricultural development by providing tools for crop management, soil analysis, and weather forecasting. Built using HTML CSS and JS. 🌾 wegrow.vercel.app',
        },
        {
            image: require('./Assets/Codex.png'),
            title: 'CODEX',
            description: '🏆 Ranked 5th in the Codex Contest 1, demonstrating a strong profile in competitive program',
        },
        {
            image: [
                require('./Assets/codeforces1.png'),
                require('./Assets/codeforces2.png'),
                require('./Assets/codeforces3.png'),
            ],
            title: 'CODEFORCES PROFILE',
            description: (
                <span>
                    🏆 Profile showcasing my competitive programming achievements and problem-solving skills on Codeforces. 
                    Focused on algorithmic challenges and contests. 💡 
                    <a href="https://codeforces.com/profile/The_DeepDas" target="_blank" rel="noopener noreferrer">Visit Codeforces for latest info</a>
                </span>
            ),
        },
        {
            image: [
                require('./Assets/leetcode1.png'),
                require('./Assets/leetcode2.png'),
            ],
            title: 'LEETCODE PROFILE',
            description: (
                <span>
                    💻 LeetCode profile highlighting my practice and progress in solving coding problems. 
                    Includes various difficulty levels and problem types. 📈 
                    <a href="https://leetcode.com/u/THE_DEEP_/" target="_blank" rel="noopener noreferrer">Visit LeetCode for latest info</a>
                </span>
            ),
        },
        {
            image: [
                require('./Assets/hackout1.jpg'),
                require('./Assets/hackout2.jpg'),
                require('./Assets/hackout3.jpg'),
            ],
            title: 'HACKOUT, DAIICT HACKATHON',
            description: '🏅 Participated in HackOut, a hackathon organized by DAIICT. Collaborated with a team to develop an innovative solution to a real-world problem. 💡',
        },
        {
            image: require('./Assets/Web Wonders finalists.jpg'),
            title: 'WEB WONDERS FINALISTS',
            description: '🌟 Recognized as a finalist in the Web Wonders competition for creating a standout web application with cutting-edge design and functionality. 🏅',
        },
        {
            image: [
                require('./Assets/Drone_Workshop1.jpg'),
                require('./Assets/Drone_Workshop2.jpg'),
                require('./Assets/Drone_Workshop3.jpg'),
            ],
            title: 'Drone Workshop',
            description: '🏅 Attended a workshop by SAE India Southern Section at Vellamal College, Chennai. Got hands-on experience and made a drone from scratch. 💡',
        },
        {
            image: require('./Assets/Gandhian_Idea_Competition.jpg'),
            title: 'Ideathon Competition Finalists',
            description: '🌟 We participated in the Gandhian Idea Competition held by auro university and cleared the round 1 and reached the final where we presented the project to the panel. 🏅',
        },
        {
            image: require('./Assets/acm_summer.png'),
            title: 'ACM SUMMER CHALLENGE',
            description: '🌞 Took part in the ACM Summer Challenge, where I tackled complex algorithmic problems and improved my coding skills. 🏆',
        },
        {
            image: [
                require('./Assets/linefollower2.png'),
                require('./Assets/linefollower.jpg'),
                require('./Assets/linefollower1.jpg'),
            ],
            title: 'LINEFOLLOWER BOT',
            description: '🤖 Built a line-following robot for automation and robotics competitions. Designed and programmed using Arduino and sensors for precise movement and task execution. 🛠️',
        },
    ];

    return (
        <div className="technical-page">
            <h1>Welcome to my technical portfolio</h1>
            <p>
                Explore a comprehensive overview of my technical skills, projects, and achievements. Here, you can delve into the details of each project and gain insights into the work I have accomplished. Discover how I apply my knowledge and expertise to create impactful solutions.
            </p>

            {/* Experiences Section */}
            <section className="experiences-section">
                <h2>Experiences</h2>
                <div className="technical-gallery">
                    {experiences.map((exp, index) => (
                        <ImageCard
                            key={index}
                            image={Array.isArray(exp.image) ? exp.image : [exp.image]}
                            title={exp.title}
                            description={exp.description}
                        />
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2>Projects</h2>
                <div className="technical-gallery">
                    {projects.map((project, index) => (
                        <ImageCard
                            key={index}
                            image={Array.isArray(project.image) ? project.image : [project.image]}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Technical;
