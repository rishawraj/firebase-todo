import React from "react";
import githubIcon from "./assets/github.png";

export default function Footer() {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>rishawraj@2023</div>{" "}
      <a
        href="https://github.com/rishawraj"
        target="_blank"
        style={{
          // background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "40px" }} src={githubIcon} alt="github-icon" />
      </a>
    </div>
  );
}
