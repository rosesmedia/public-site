import SlackIcon from "@/components/SlackIcon";
import Link from "next/link";

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
      <div
        style={{
          display: "grid",
          rowGap: "10px",
        }}
      >
        <div
          className="title-text"
          style={{
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          Quick Links
        </div>
        <a
          href="https://graphics.roses.media"
          target="_blank"
          rel="noopener noreferrer"
          className="body-text"
          style={{
            backgroundColor: "#ef4444",
            color: "#fafafa",
            padding: "10px 40px 10px 40px",
            borderRadius: "9999px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Graphics Scoreboard Control
        </a>
        <Link
          href={"/obs"}
          className="body-text"
          style={{
            backgroundColor: "#ef4444",
            color: "#fafafa",
            padding: "10px 40px 10px 40px",
            borderRadius: "9999px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          View OB Kit Info
        </Link>
        <div
          className="title-text"
          style={{
            fontSize: "40px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Get Involved
        </div>
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
            textAlign: "center",
          }}
        >
          Sign Up for Crewing!
        </a>
        <a
          href="https://roseslive.slack.com/signup#/domain-signup"
          target="_blank"
          rel="noopener noreferrer"
          className="body-text"
          style={{
            backgroundColor: "#000",
            color: "#fafafa",
            padding: "10px 40px 10px 40px",
            borderRadius: "9999px",
            fontSize: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <SlackIcon />
          Join the Slack!
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
