import SlackIcon from "@/components/SlackIcon";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

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
        <Link
          href={"/obs"}
          className="body-text main-page-link"
        >
          View OB Kit Info
        </Link>
        <a
          href="https://graphics.roses.media"
          target="_blank"
          rel="noopener noreferrer"
          className="body-text external-link"
        >
          <div>Graphics Scoreboard Control</div>
          <FaExternalLinkAlt />
        </a>
        <a
          href="https://www.york.ac.uk/map/"
          target="_blank"
          rel="noopener noreferrer"
          className="body-text external-link"
        >
          <div>Campus Map</div>
          <FaExternalLinkAlt />
        </a>
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
          className="body-text external-link"
        >
          <div>Sign Up for Crewing!</div>
          <FaExternalLinkAlt />
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
