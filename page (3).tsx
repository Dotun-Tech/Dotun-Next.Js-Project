export default function Start() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Start Your Mortgage</h1>
      <p style={{ color: "#555" }}>
        A simplified replica of Better.com's Start page. Replace this with a
        multi-step form or integrations if needed.
      </p>

      <form style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Your name"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </form>
    </main>
  );
}