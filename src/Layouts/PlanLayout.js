import React from "react";

export default function PlanLayout({ children }) {
  const style = {
    width: "100%",
    maxWidth: "500px",
    margin: "auto",
  };
  return <div style={style}>{children}</div>;
}
