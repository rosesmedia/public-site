import { obKits } from "@/util/tv-kits";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function OBsPage() {
  return (
    <div
      style={{
        display: "grid",
        padding: "15px",
        gap: "10px",
      }}
    >
      {obKits.map((kit, idx) => {
        return (
          <div
            key={idx}
            id={kit.shortName.toLowerCase()}
            style={{
              width: "100%",
              backgroundColor: kit.branding.color,
              padding: "15px",
              borderRadius: "10px",
              borderWidth: "2px",
              borderColor: kit.branding.getBorderColor(),
              color: kit.branding.textColor,
              display: "grid",
            }}
          >
            <div
              className="title-text"
              style={{
                fontSize: "30px",
              }}
            >
              {kit.shortName}
            </div>
            <div className="body-text">
              This kit belongs to {kit.branding.toString()}.
            </div>
            <Link
              className="body-text"
              href={`https://${kit.shortName.toLowerCase()}.graphics.roses.media`}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                textDecoration: "underline",
                width: "min-content",
                whiteSpace: "nowrap",
              }}
            >
              {kit.shortName} Graphics Dashboard
            </Link>
            <Link
              className="body-text"
              href={`/ob/${kit.shortName.toLowerCase()}`}
              style={{
                padding: "5px 20px 5px 20px",
                backgroundColor: kit.branding.buttonColor,
                color: kit.branding.buttonTextColor,
                width: "min-content",
                whiteSpace: "nowrap",
                marginLeft: "auto",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>View Page</div>
              <FaArrowRight />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
