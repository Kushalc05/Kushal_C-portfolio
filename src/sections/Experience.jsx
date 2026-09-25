function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">03 / Experience</p>

          <h2>
            Hands-on
            <span> experience.</span>
          </h2>
        </div>

        <article className="experience-item">
          <div className="experience-meta">
            <span>Internship</span>
            <span>Java / Full Stack</span>
          </div>

          <div className="experience-content">
            <div className="experience-heading">
              <div>
                <h3>Java Full Stack Development Trainee</h3>

                <p className="experience-company">
                  Tech Vedhu Pvt. Ltd.
                  <span> · Bengaluru</span>
                </p>
              </div>

              <span className="experience-type">Training</span>
            </div>

            <p className="experience-description">
              Worked on an E-Commerce Order and Inventory Management System
              using Java, Spring Boot, MySQL, HTML, CSS and JavaScript.
            </p>

            <ul className="experience-points">
              <li>
                Developed backend functionality using Spring Boot and REST APIs.
              </li>

              <li>
                Worked with MySQL for application data and persistence.
              </li>

              <li>
                Built and integrated frontend functionality using web
                technologies.
              </li>
            </ul>

            <div className="experience-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>JavaScript</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience