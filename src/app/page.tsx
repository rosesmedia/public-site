import SlackIcon from "@/components/SlackIcon";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface HomeLinkProps {
  style?: "slack";
  title: string;
  url: string;
}

interface HomeSection {
  title: string;
  links: HomeLinkProps[];
}

function HomeLink(props: HomeLinkProps) {
  const isExternalLink = !props.url.startsWith("/") && !props.style;

  return (
    <>
      <Link
        href={props.url}
        target={isExternalLink ? "_blank" : undefined}
        className={`body-text home-link ${props.style ? `${props.style}-link` : ""}`}
      >
        {props.style === "slack" && <SlackIcon />}
        {props.title}
        {isExternalLink && <FaExternalLinkAlt />}
      </Link>
    </>
  );
}

function Section(props: HomeSection) {
  return (
    <>
      <div
        className="title-text"
        style={{
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        {props.title}
      </div>

      {props.links.map((link) => (
        <HomeLink key={link.title} {...link} />
      ))}
    </>
  );
}

const SECTIONS: HomeSection[] = [
  {
    title: "Quick Links",
    links: [
      {
        title: "View OB Kit Info",
        url: "/obs",
      },
      {
        title: "Graphics Scoreboard Control",
        url: "https://graphics.roses.media",
      },
      {
        title: "Campus Map",
        url: "https://roseslive.co.uk/map",
      },
      {
        title: "Vase",
        url: "https://vase.ury.org.uk",
      },
    ],
  },
  {
    title: "Tech links",
    links: [
      {
        title: "Go Live instructions",
        url: "https://docs.google.com/document/d/1kQcz9uh8wqEfJqCae-_olfhB3wvBGgQV1QxGBcpwnQo/edit?tab=t.0",
      },
      {
        title: "OB Stream keys/configurations",
        url: "https://docs.google.com/spreadsheets/d/12LvxeXGz3GcIUrza5TVJ6PbAsd7t6gQXDRj_jFvKFgk/edit?gid=0#gid=0",
      },
      {
        title: "York Radio OB Guides",
        url: "https://drive.google.com/drive/u/1/folders/1lo7aKvSxF2VL-YCcx49C69CniYdTltoY",
      },
      {
        title: "Lancs TV OB Guides",
        url: "/go/la1-guides",
      },
    ],
  },
  {
    title: "Get Involved",
    links: [
      {
        title: "Sign Up For Crewing!",
        url: "https://signup.roses.media",
      },
      {
        title: "Join the Slack!",
        url: "https://roseslive.slack.com/signup#/domain-signup",
        style: "slack",
      },
    ],
  },
];

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
        {SECTIONS.map((section) => (
          <Section key={section.title} {...section} />
        ))}

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
