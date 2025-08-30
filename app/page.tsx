export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Navbar */}
      <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "1rem 2rem", 
        backgroundColor: "#222", 
        color: "#fff" 
      }}>
        <h2 style={{ margin: 0 }}>🚀 My Portfolio</h2>
        <div>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        minHeight: "80vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f5f5f5" 
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Hi, I'm Sameer 👋</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
          A passionate Computer Science student exploring Web Development, AI, and innovative projects.
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={sectionStyle}>
        <h2>About Me</h2>
        <p>
          I'm a 4th-year Computer Science student with skills in React, Python, JavaScript, and SQL. 
          I love building impactful projects and solving real-world problems.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={sectionStyle}>
        <h2>Skills</h2>
        <ul>
          <li>⚡ React & JavaScript</li>
          <li>⚡ Python & SQL</li>
          <li>⚡ HTML & CSS</li>
          <li>⚡ Git & GitHub</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" style={sectionStyle}>
        <h2>Projects</h2>
        <ul>
          <li>📌 MERN Stack Web App</li>
          <li>📌 Face Recognition Login System</li>
          <li>📌 Car Rental System (UML + CASE tools)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={sectionStyle}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:sameer@example.com">sameer@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
        © {new Date().getFullYear()} Sameer Anwar | All Rights Reserved
      </footer>
    </div>
  );
}

/* Reusable Styles */
const sectionStyle: React.CSSProperties = {
  padding: "4rem 2rem",
  textAlign: "center",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ddd"
};

const linkStyle: React.CSSProperties = {
  marginLeft: "1rem",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};