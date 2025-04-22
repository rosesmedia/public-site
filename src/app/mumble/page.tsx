const mumbleFields = [
  { ios: "Description", android: "Label", value: "Roses Media" },
  { ios: "Address", value: "mumble.roses.media" },
  { ios: "Port", android: "Default", value: "64738 (default)" },
  { ios: "Username", value: 'Your name, and no, not the text "Your name"' },
  { ios: "Password", value: "Leave blank" },
];

export default function MumblePage() {
  return (
    <>
      <div
        style={{
          display: "grid",
          padding: "15px",
          gap: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            textAlign: "center",
          }}
          className="title-text"
        >
          How to Mumble
        </h1>
        <h1
          style={{
            fontSize: "40px",
          }}
          className="title-text"
        >
          iOS
        </h1>
        <ol
          className="body-text"
          style={{
            listStyleType: "decimal",
            marginLeft: "20px",
          }}
        >
          <li>
            Download the{" "}
            <a
              href="https://apps.apple.com/us/app/mumble/id443472808"
              style={{ textDecoration: "underline" }}
            >
              Mumble app from the App Store
            </a>
          </li>
          <li>
            Once the app is downloaded, open it and click on{" "}
            <b>Favourite Servers</b>
          </li>
          <li>
            Click the <b>+</b> button in the top right, then enter the following
            information:
          </li>
          <tbody>
            {mumbleFields.map(({ ios, value }, idx) => (
              <tr key={idx}>
                <td className="status-label">
                  <b>{ios}</b>
                </td>
                <td
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
          <br />
          <li>
            Click <b>Done</b> in the top right
          </li>
          <li>
            Select <b>Roses Media</b> in the list then click <b>Connect</b>
          </li>
          <li>Join the channel that corresponds to your current OB Kit</li>
        </ol>
        <h1
          style={{
            fontSize: "40px",
          }}
          className="title-text"
        >
          Android
        </h1>
        <ol
          className="body-text"
          style={{
            listStyleType: "decimal",
            marginLeft: "20px",
          }}
        >
          <li>
            Download the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=se.lublin.mumla"
              style={{ textDecoration: "underline" }}
            >
              Mumla app from the Google Play Store
            </a>
          </li>
          <li>
            Once the app is downloaded, open it and click <b>Generate</b> on the
            popup
          </li>
          <li>
            Click the <b>+</b> button in the top right, then enter the following
            information:
          </li>
          <tbody>
            {mumbleFields.map(({ ios, android, value }, idx) => (
              <tr key={idx}>
                <td className="status-label">
                  <b>{android ?? ios}</b>
                </td>
                <td
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
          <br />
          <li>
            Click <b>Add</b>
          </li>
          <li>
            Select <b>Roses Media</b> in the list then <b>Allow</b> the
            Untrusted Certificate
          </li>
          <li>Join the channel that corresponds to your current OB Kit</li>
        </ol>
      </div>
    </>
  );
}
