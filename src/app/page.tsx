export default function Home() {
  return (
    <div
      style={{
        height: "calc(100vh - 70px)",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <a
          href="https://signup.roses.media"
          target="_blank"
          rel="noopener noreferrer"
          className="body-text"
          style={{
            backgroundColor: "#ef4444",
            color: "#fafafa",
            padding: "10px 40px 10px 40px",
            borderRadius: "9999px",
            fontSize: "20px",
          }}
        >
          Sign Up for Crewing!
        </a>

        <div
          className="body-text"
          style={{
            fontSize: "20px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          And more coming soon...
        </div>
      </div>
    </div>
  );
}
