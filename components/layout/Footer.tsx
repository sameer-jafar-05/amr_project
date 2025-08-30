export default function Footer() {
  return (
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
  );
}