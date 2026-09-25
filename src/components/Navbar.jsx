import { useState } from 'react'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          KC<span>.</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'light' ? '☾' : '☀'}
            </span>
          </button>

          <a href="/resume.pdf" className="navbar-resume" download>
            Resume <span>↓</span>
          </a>

          <a href="#contact" className="navbar-contact">
            Let's talk <span>↗</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
