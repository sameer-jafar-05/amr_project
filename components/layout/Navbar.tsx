export default function Navbar() {
  return (
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
  );
}