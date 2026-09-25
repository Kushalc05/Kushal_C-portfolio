const skillGroups = [
  {
    number: '01',
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    number: '04',
    title: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '05',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Maven', 'Postman'],
  },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-intro skills-intro">
          <p className="section-kicker">02 / Skills</p>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

          <p className="section-subtitle">
            A focused set of technologies I've worked with through coursework,
            training and practical projects.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.title}>
              <span className="skill-number">{group.number}</span>

              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills