export default function About() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>About Us</h1>
      <p style={{ color: "#555" }}>
        This page replicates the layout and content structure of the Better.com
        About Us page.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>Our Mission</h2>
        <p>
          To make mortgages simple and transparent. (This is placeholder text
          for the demo.)
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Our Values</h2>
        <ul>
          <li>Transparency</li>
          <li>Simplicity</li>
          <li>Customer-first</li>
        </ul>
      </section>
    </main>
  );
}