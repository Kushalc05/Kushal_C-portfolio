function Contact() {
  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <p className="section-kicker">06 / Contact</p>

            <h2>
              Let's build
              <span> something.</span>
            </h2>

            <p className="contact-description">
              I'm currently looking for entry-level software development
              and Java backend opportunities. If you have an opportunity,
              project or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:kushalc093@gmail.com"
                className="contact-email"
              >
                <span>kushalc093@gmail.com</span>
                <span>↗</span>
              </a>

              <div className="contact-links">
                <a
                  href="https://github.com/kushalc05"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

                 <a
              href="https://www.linkedin.com/in/kushal-c-sde/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{ fontSize: '1.05rem' }}
            >
              <span>LinkedIn</span>
              <span>kushal-c-sde ↗</span>
            </a>

                <a href="/Kushal_C_Resume.pdf" download>
                  Resume
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="footer-logo">KC<span>.</span></span>
            <p>Software Developer · Java Backend</p>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Kushal C
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  )
}

export default Contact