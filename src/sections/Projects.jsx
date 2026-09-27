function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        {/* ================================
            SECTION INTRO
        ================================= */}
        <div className="projects-intro">
          <span className="section-kicker">04 / Selected Work</span>

          <h2 className="section-title">
            Projects built to solve
            <span> practical problems.</span>
          </h2>

          <p className="section-subtitle">
            A selection of applications and academic projects that reflect my
            experience with backend development, full-stack applications,
            databases and applied machine learning.
          </p>
        </div>

        {/* ================================
            FEATURED PROJECT — STOCKFLOW
        ================================= */}
        <article className="featured-project">

          <div className="project-visual project-visual-image">
            <img
              src="/StockFlow_dashboard.png"
              alt="StockFlow e-commerce and inventory management application"
            />

            <div className="visual-label">
              <span>01</span>
              <span>Java · Spring Boot · MySQL</span>
            </div>
          </div>

          <div className="featured-project-info">

            <span className="project-number">01</span>

            <h3>StockFlow</h3>

            <p className="project-subtitle">
              E-Commerce &amp; Inventory Management System
            </p>

            <p className="project-description">
              A full-stack application focused on product management,
              authentication, cart functionality, ordering and
              inventory-related workflows.
            </p>

            <div className="project-technologies">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Data JPA</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://stockflow-e-commerce-inventory-management-production.up.railway.app"
                target="_blank"
                rel="noreferrer"
                className="project-link project-link-primary"
              >
                Live Demo
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Kushalc05/StockFlow-E-Commerce-Inventory-Management"
                target="_blank"
                rel="noreferrer"
                className="project-link project-link-secondary"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>

          </div>
        </article>

        {/* ================================
            SHIELDNET
        ================================= */}
        <article className="showcase-project">

          <div className="showcase-project-visual">
            <img
              src="/shieldNet_dashboard.png"
              alt="ShieldNet AI-based cyber threat monitoring system dashboard"
            />
          </div>

          <div className="showcase-project-info">

            <span className="project-number">02</span>

            <span className="project-label">
              Final Year Project
            </span>

            <h3>ShieldNet</h3>

            <p className="project-subtitle">
              AI-Based Cyber Threat Monitoring System
            </p>

            <p className="project-description">
              An AI-based cyber threat monitoring system that analyzes network
              traffic and classifies malicious activities using Machine
              Learning and Deep Learning through a Flask-based web application.
            </p>

            <div className="project-technologies">
              <span>Python</span>
              <span>Flask</span>
              <span>Scikit-learn</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>Pandas</span>
              <span>NumPy</span>
            </div>

            <div className="project-detail-list">

              <div>
                <span>Detection</span>
                <strong>
                  Benign · DoS · DDoS · PortScan · BruteForce
                </strong>
              </div>

              <div>
                <span>Model</span>
                <strong>
                  Deep Neural Network with Attention Mechanism
                </strong>
              </div>

            </div>

            <div className="project-links">
              <a
                href="https://github.com/Kushalc05/ShieldNet-AI"
                target="_blank"
                rel="noreferrer"
                className="project-link project-link-primary"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>

          </div>

        </article>

        {/* ================================
            SECONDARY PROJECTS
        ================================= */}
        <div className="secondary-projects">

          <article className="secondary-project">

            <div className="secondary-project-number">
              03
            </div>

            <div className="secondary-project-content">

              <span className="project-label">
                Web Application
              </span>

              <h3>Eye Shopee</h3>

              <p className="project-subtitle">
                E-Commerce Web Application
              </p>

              <p className="project-description">
                A full-stack e-commerce application developed using React.js,
                Node.js and MySQL, with authentication, shopping cart,
                product management, order management and an admin dashboard.
              </p>

              <div className="project-technologies">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>

            </div>
          </article>

          <aside className="future-project">

            <span>COMING NEXT</span>

            <p>
              One more technically stronger project is in progress.
            </p>

            <small>
              The next project will be added here as the portfolio grows.
            </small>

          </aside>

        </div>

      </div>
    </section>
  )
}

export default Projects