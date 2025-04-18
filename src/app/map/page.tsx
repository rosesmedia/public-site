import RosesMap from "@/components/RosesMap";


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
    
    <div style={{ display: "block", width: "100%", height: "100%" }}>
      <RosesMap />
    </div>
    

        
      <div
        style={{
          display: "grid",
          rowGap: "10px",
        }}
      >
        <a
          href="/"
          target="_self"
          rel="noopener noreferrer"
          className="body-text"
          style={{
            backgroundColor: "#ef4444",
            color: "#fafafa",
            position: "absolute",
            borderRadius: "9999px",
            fontSize: "20px",
            padding: "10px 40px 10px 40px",
            textAlign: "center",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Go Back
        </a>


        </div>
    </div>
  );
}
