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
          style={{
            backgroundColor: "#ef4444",
            color: "#fafafa",
            padding: "10px 40px 10px 40px",
            borderRadius: "9999px",
            fontSize: "20px",
            fontFamily: '"soleil", sans-serif',
            fontWeight: 500,
          }}
          className=".ff-soleil"
        >
          Sign Up for Crewing!
        </a>
      </div>
    </div>
  );
}
