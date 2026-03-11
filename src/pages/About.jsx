import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <header className="page-header">
        <h1>About Me</h1>
        <p>Designing with purpose, building with passion.</p>
      </header>

      <section className="about-grid">
        {/* Left: Personal Bio */}
        <div className="glass-card bio-card">
          <div className="section-title">
            <i className="ri-user-smile-line"></i>
            <h3>Who I Am</h3>
          </div>
          <p className="bio-intro">
            I am a <strong>UI/UX Designer</strong> passionate about building mobile and web interfaces that balance visual appeal with seamless usability.
            I specialize in <strong>Figma</strong> and responsive layouts, crafting clean and high-performance interfaces that bridge the gap between design and user needs.
          </p>
          <p className="bio-details">
            Dedicated to bringing fresh ideas, structured thinking and strong collaboration to every project. I design with empathy and clarity to ensure every screen supports real user needs.
          </p>
          <div className="contact-meta">
            <div className="meta-item">
              <i className="ri-map-pin-line"></i>
              <span>Malappuram</span>
            </div>
            <div className="meta-item">
              <i className="ri-mail-line"></i>
              <span>riyalulu098@gmail.com</span>
            </div>
            <div className="meta-item">
              <i className="ri-phone-line"></i>
              <span>6235806079</span>
            </div>
          </div>
        </div>

        {/* Right: Education */}
        <div className="education-column">
          <div className="section-title padding-left-small">
            <i className="ri-graduation-cap-line"></i>
            <h3>Education</h3>
          </div>

          <div className="education-list">
            <div className="edu-item">
              <div className="edu-year">
                08/2025 – 01/2025
              </div>
              <div className="edu-details">
                <h4>Skill Diploma in UI/UX Design</h4>
                <p className="institution-name">Technodot Acadamy of R&D&I</p>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-year">
                2022 – 2025
              </div>
              <div className="edu-details">
                <h4>Bachelor of Commerce</h4>
                <p className="institution-name">Calicut university</p>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default About;
