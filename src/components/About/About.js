import React from "react";
import styled from "styled-components";
import Image from "../components/Image"; // adjust the path if you're using a custom Image component

const About = () => {
  const technologies = [
    const technologies = [
  { name: "Python", img: process.env.PUBLIC_URL + "/images/python.png" },
  { name: "MySQL", img: process.env.PUBLIC_URL + "/images/mysql.png" },
  { name: "SQL Server", img: process.env.PUBLIC_URL + "/images/sqlserver.png" },
  { name: "Git", img: process.env.PUBLIC_URL + "/images/git.png" },
  { name: "Excel", img: process.env.PUBLIC_URL + "/images/excel.png" },
  { name: "Power BI", img: process.env.PUBLIC_URL + "/images/powerbi.png" },
  { name: "Tableau", img: process.env.PUBLIC_URL + "/images/tableau.png" },
  { name: "Pandas", img: process.env.PUBLIC_URL + "/images/pandas.png" },
  { name: "NumPy", img: process.env.PUBLIC_URL + "/images/numpy.png" },
  { name: "Seaborn", img: process.env.PUBLIC_URL + "/images/seaborn.png" },
  { name: "Figma", img: process.env.PUBLIC_URL + "/images/figma.png" },
  { name: "VS Code", img: process.env.PUBLIC_URL + "/images/vscode.png" }
];

  return (
    <AboutWrapper id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <Image src="images/man-svgrepo-com.svg" alt="Profile" />
          </div>

          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi! I'm Pavan Kumar, a passionate Data Analyst from Madanapalle, Andhra Pradesh.
              I love transforming data into meaningful insights and building visual stories with tools like Power BI, Excel, and Tableau.
              I enjoy learning new tech and solving problems creatively.
            </p>

            <h3>Technologies I Use</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div className="tech-item" key={index}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;

// Styled Components (optional)
const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;

  .about-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .about-image img {
    max-width: 300px;
    border-radius: 1rem;
  }

  .about-text {
    max-width: 600px;
  }

  .about-text h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .tech-item img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
`;
