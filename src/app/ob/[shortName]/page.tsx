/* eslint-disable @next/next/no-img-element */
import { obKits } from "@/util/tv-kits";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Pre-generate the list of OB Kits for that 'dynamic' route so you don't have to make a new page for each OB Kit
 */
export async function generateStaticParams() {
  return obKits.map((kit) => ({
    shortName: kit.shortName.toLowerCase(),
  }));
}

export default async function SingleOBKitPage({
  params,
}: {
  params: Promise<{ shortName: string }>;
}) {
  const awaitedParams = await params;
  const obKit = obKits.find(
    (v) => v.shortName.toLowerCase() == awaitedParams.shortName,
  )!;

  return (
    <div
      style={{
        display: "grid",
        padding: "15px",
        gap: "10px",
      }}
    >
      <Link
        className="body-text"
        href={`/obs`}
        style={{
          padding: "5px 20px 5px 20px",
          backgroundColor: obKit.branding.buttonColor,
          color: obKit.branding.buttonTextColor,
          width: "min-content",
          whiteSpace: "nowrap",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          borderWidth: "2px",
          borderColor: obKit.branding.getBorderColor(
            obKit.branding.buttonColor,
          ),
        }}
      >
        <FaArrowLeft />
        <div>Back to list</div>
      </Link>
      <h1
        style={{
          fontSize: "70px",
          textAlign: "center",
        }}
        className="title-text"
      >
        {obKit.shortName}
      </h1>
      <div className="group">
        <Link
          className="body-text home-link"
          href={`https://${obKit.shortName.toLowerCase()}.graphics.roses.media`}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            fontSize: "15px",
            borderWidth: "2px",
            borderColor: obKit.branding.getBorderColor(
              obKit.branding.buttonColor,
            ),
          }}
        >
          <div>{obKit.shortName} Graphics Dashboard</div>
          <FaExternalLinkAlt />
        </Link>
      </div>
      {obKit.wifi?.ssid && (
        <>
          <h2
            style={{
              fontSize: "40px",
            }}
            className="title-text"
          >
            WiFi
          </h2>
          <div className="body-text">
            This OB Kit advertises the wifi network {obKit.wifi.ssid}{" "}
            {obKit.wifi.password ? (
              <>with the password {obKit.wifi.password}</>
            ) : (
              <>which is open to the public, not sure whose idea that was.</>
            )}
          </div>
          <br />
        </>
      )}
      {obKit.graphics?.uptimeKumaMonitorID && (
        <div>
          <h2
            style={{
              fontSize: "40px",
            }}
            className="title-text"
          >
            Graphics Dashboard Status
          </h2>
          <table
            className="body-text"
            style={{
              borderCollapse: "separate",
              borderSpacing: "5px",
            }}
          >
            <tbody>
              {["Status", "Uptime", "Ping", "Avg-response", "Cert-exp"].map(
                (val, idx) => (
                  <tr key={idx}>
                    <td className="status-label">{val}</td>
                    <td>
                      <img
                        height={20}
                        src={`https://uptime.comp.ystv.co.uk/api/badge/${
                          obKit.graphics?.uptimeKumaMonitorID
                        }/${val.toLowerCase()}?style=for-the-badge`}
                        alt={`A badge displaying the current ${val.toLowerCase()} of the graphics dashboard for the OB Kit`}
                        className="status-img"
                      />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
