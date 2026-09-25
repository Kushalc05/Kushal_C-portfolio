function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">05 / Education</p>

          <h2>
            Where I
            <span> started.</span>
          </h2>
        </div>

        <article className="education-item">
          <div className="education-year">
            <span>2022</span>
            <div className="education-line"></div>
            <span>2026</span>
          </div>

          <div className="education-content">
            <div className="education-top">
              <div>
                <p className="education-degree">
                  B.Tech — Computer Science & Engineering
                </p>

                <h3>
                  Srinivas University Institute of Engineering and Technology
                </h3>

                <p className="education-location">
                  Mangalore, Karnataka
                </p>
              </div>

              <div className="education-grade">
                <span>CGPA</span>
                <strong>8.35</strong>
                <small>/ 10</small>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education