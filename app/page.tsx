// app/page.tsx
export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0 }}>MyPortfolio</h1>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Hi, I&apos;m Sameer 👋
        </h2>
        <p style={{ maxWidth: "600px", fontSize: "1.2rem", color: "#555" }}>
          I&apos;m a Computer Science student passionate about web development,
          building impactful projects, and exploring new technologies.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        © {new Date().getFullYear()} Sameer | Built with ❤️ using Next.js
      </footer>
    </main>
  );
}