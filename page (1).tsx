import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Home loans made simple
      </h1>
      <p style={{ color: "#555" }}>
        This is the Home page (Better.com replica demo).
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/start">
          <a
            style={{
              marginRight: "12px",
              padding: "10px 20px",
              background: "#0d6efd",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Get Started
          </a>
        </Link>
        <Link href="/mortgage-calculator">
          <a
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Try Calculator
          </a>
        </Link>
      </div>
    </main>
  );
}