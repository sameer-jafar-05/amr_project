export default function Hero() {
  return (
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
  );
}