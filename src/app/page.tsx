import SlackIcon from "@/components/SlackIcon";
import { Center, Group } from "@mantine/core";

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
            // textAlign: "center",
            // display: "flex",
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
