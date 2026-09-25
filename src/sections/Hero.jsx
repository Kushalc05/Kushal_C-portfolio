function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">

        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            Kushal C 
          </div>

          <p className="hero-eyebrow">
            Software Developer · Java Backend Development
          </p>

          <h1>
            Building software
            <span> with purpose.</span>
          </h1>

          <p className="hero-description">
            I'm Kushal C, a Computer Science & Engineering graduate
            focused on Java, backend development and building practical
            software applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View my work <span>↓</span>
            </a>

            <a href="/Kushal_C_Resume.pdf" className="button button-secondary" download>
              Download resume <span>↗</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
    href="https://github.com/kushalc05"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

            <a
    href="https://www.linkedin.com/in/kushal-c-sde/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>developer.java</span>
            </div>

            <div className="code-content">
              <div>
                <span className="code-number">01</span>
                <span className="code-keyword">public class</span>
                <span className="code-class">Developer</span>
                <span>{` {`}</span>
              </div>

              <div className="code-indent">
                <span className="code-number">02</span>
                <span className="code-keyword">String</span>
                <span>focus = </span>
                <span className="code-string">"Backend"</span>
                <span>;</span>
              </div>

              <div className="code-indent">
                <span className="code-number">03</span>
                <span className="code-keyword">String[]</span>
                <span> stack = {`{`}</span>
              </div>

              <div className="code-indent-2">
                <span className="code-number">04</span>
                <span className="code-string">"Java"</span>,
              </div>

              <div className="code-indent-2">
                <span className="code-number">05</span>
                <span className="code-string">"Spring Boot"</span>,
              </div>

              <div className="code-indent-2">
                <span className="code-number">06</span>
                <span className="code-string">"SQL"</span>
              </div>

              <div className="code-indent">
                <span className="code-number">07</span>
                <span>{`};`}</span>
              </div>

              <div>
                <span className="code-number">08</span>
                <span>{`}`}</span>
              </div>
            </div>
          </div>

          <div className="hero-tech">
            <span>JAVA</span>
            <span>SPRING BOOT</span>
            <span>SQL</span>
            <span>REST API</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero