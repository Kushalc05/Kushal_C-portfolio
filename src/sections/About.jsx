function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">01 / About</p>

          <h2>
            Learning by
            <span> building.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">
              I'm a recent B.Tech Computer Science & Engineering graduate
              focused on software development and Java backend engineering.
            </p>

            <p>
              I've built applications using Java, Spring Boot, SQL, REST APIs
              and modern web technologies. My current focus is strengthening
              my programming fundamentals, backend development skills and
              problem-solving ability through hands-on projects.
            </p>

            <p>
              I'm particularly interested in building reliable, maintainable
              backend systems and growing into a strong software engineer.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span>Education</span>
              <strong>B.Tech CSE</strong>
            </div>

            <div className="detail-item">
              <span>CGPA</span>
              <strong>8.35 / 10</strong>
            </div>

            <div className="detail-item">
              <span>Primary focus</span>
              <strong>Software Development</strong>
            </div>

            <div className="detail-item">
              <span>Based in</span>
              <strong>India</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About