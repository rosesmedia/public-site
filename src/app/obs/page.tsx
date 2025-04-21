import { GroupBranding } from "@/util/branding";
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
              position: "relative",
              width: "100%",
              backgroundColor: kit.branding.color,
              padding: "15px 20px 15px 20px",
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
            {kit.branding.toString() == GroupBranding.Untitled.toString() && (
              <>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "15px",
                    top: 0,
                    left: 0,
                    zIndex: 5,
                    background:
                      "linear-gradient(90deg,rgba(235, 235, 235, 1) 6.25%, rgba(235, 235, 53, 1) 6.25%, rgba(235, 235, 53, 1) 18.75%, rgba(36, 234, 235, 1) 18.75%, rgba(36, 234, 235, 1) 31.25%, rgba(34, 233, 42, 1) 31.25%, rgba(34, 233, 42, 1) 43.75%, rgba(232, 31, 233, 1) 43.75%, rgba(232, 31, 233, 1) 56.25%, rgba(231, 31, 33, 1) 56.25%, rgba(231, 31, 33, 1) 68.75%, rgba(20, 15, 231, 1) 68.75%, rgba(20, 15, 231, 1) 81.25%, rgba(15, 15, 15, 1) 81.25%, rgba(15, 15, 15, 1) 93.75%, rgba(235, 235, 235, 1) 93.75%)",
                    borderRadius: "7.5px 7.5px 0 0",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "15px",
                    bottom: 0,
                    zIndex: 5,
                    left: 0,
                  }}
                >
                  <div
                    style={{
                      top: 0,
                      left: 0,
                      width: "50%",
                      height: "7.5px",
                      background:
                        "linear-gradient(90deg, #444444 0%, #7f7f7f 100%)",
                    }}
                  />
                  <div
                    style={{
                      bottom: 0,
                      right: 0,
                      width: "50%",
                      height: "7.5px",
                      background:
                        "linear-gradient(90deg, #eeeeee 0%, #090909 100%)",
                      borderRadius: "0 0 0 7.5px",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "15px",
                    bottom: 0,
                    zIndex: 5,
                    left: 0,
                  }}
                >
                  <div
                    style={{
                      top: 0,
                      marginLeft: "auto",
                      width: "50%",
                      height: "7.5px",
                      background:
                        "linear-gradient(90deg, #1a9d7e 0%, #e9607e 100%)",
                    }}
                  />
                  <div
                    style={{
                      bottom: 0,
                      marginLeft: "auto",
                      width: "50%",
                      height: "7.5px",
                      background:
                        "linear-gradient(90deg, #7d861d 0%, #7e73eb 100%)",
                      borderRadius: "0 0 7.5px 0",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "15px",
                    top: "15px",
                    bottom: "15px",
                    left: 0,
                    background:
                      "linear-gradient(0deg,#1a9d7e 20%, #e9607e 20%, #e9607e 40%, #0f0f0f 40%, #0f0f0f 60%, #7e73eb 60%, #7e73eb 80%, #7d861d 80%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "15px",
                    height: "100%",
                    top: 0,
                    right: 0,
                    zIndex: 3,
                    background:
                      "linear-gradient(0deg,rgba(235, 235, 235, 1) 6.25%, rgba(235, 235, 53, 1) 6.25%, rgba(235, 235, 53, 1) 18.75%, rgba(36, 234, 235, 1) 18.75%, rgba(36, 234, 235, 1) 31.25%, rgba(34, 233, 42, 1) 31.25%, rgba(34, 233, 42, 1) 43.75%, rgba(232, 31, 233, 1) 43.75%, rgba(232, 31, 233, 1) 56.25%, rgba(231, 31, 33, 1) 56.25%, rgba(231, 31, 33, 1) 68.75%, rgba(20, 15, 231, 1) 68.75%, rgba(20, 15, 231, 1) 81.25%, rgba(15, 15, 15, 1) 81.25%, rgba(15, 15, 15, 1) 93.75%, rgba(235, 235, 235, 1) 93.75%)",
                    borderRadius: "0 7.5px 7.5px 0",
                  }}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
