import { obKits } from "@/util/tv-kits";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
    (v) => v.shortName.toLowerCase() == awaitedParams.shortName
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
            obKit.branding.buttonColor
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
      {obKit.wifi?.ssid && (
        <div className="body-text">
          This OB Kit advertises the wifi network {obKit.wifi.ssid}{" "}
          {obKit.wifi.password ? (
            <>with the password {obKit.wifi.password}</>
          ) : (
            <>which is open to the public, not sure whose idea that was.</>
          )}
        </div>
      )}
    </div>
  );
}
