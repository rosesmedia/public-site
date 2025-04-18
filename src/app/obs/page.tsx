import { GroupBranding } from "@/util/branding";

const obKits = [
  {
    short: "Y-OB0",
    branding: GroupBranding.York,
  },
  {
    short: "Y-OB1",
    branding: GroupBranding.York,
  },
  {
    short: "Y-OB2",
    branding: GroupBranding.York,
  },
  {
    short: "Y-OB3",
    branding: GroupBranding.York,
  },
  {
    short: "Y-OB4",
    branding: GroupBranding.York,
  },
  {
    short: "Y-OB5",
    branding: GroupBranding.York,
  },
  {
    short: "L-OB1",
    branding: GroupBranding.Lancs,
  },
  {
    short: "L-OB2",
    branding: GroupBranding.Lancs,
  },
  {
    short: "L-OB3",
    branding: GroupBranding.Lancs,
  },
  {
    short: "M-OB",
    branding: GroupBranding.Moorhen,
  },
  {
    short: "DR-OB",
    branding: GroupBranding.David,
  },
];

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
              {kit.short}
            </div>
            <div className="body-text">
              This kit belongs to {kit.branding.toString()}.
            </div>
            <a
              className="body-text"
              href={`https://${kit.short.toLowerCase()}.graphics.roses.media`}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                textDecoration: "underline",
              }}
            >
              {kit.short} Graphics Dashboard
            </a>
          </div>
        );
      })}
    </div>
  );
}
