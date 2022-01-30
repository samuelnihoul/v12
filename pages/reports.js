import react from "react";
import bg from "../public/assets/images/reports.jpeg";
export default function reports() {
  const img = bg;
  return (
    <div
      style={{
        textAlign: "center",
        textColor: "white",
        backgroundImage: "/assets/images/reports.jpeg",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h1 style={{ padding: "12vh" }}>No project reports to show yet</h1>
    </div>
  );
}
