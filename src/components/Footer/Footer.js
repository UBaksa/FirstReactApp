import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a target="blank" href="https://github.com/UBaksa">
        <FaGithub style={{ width: "20px", height: "20px" }} />
      </a>
      <p style={{ color: "orange", fontWeight: "bolder" }}>
        Powered by:IT Kamp
      </p>
      <p>
        <a target="blank" href="https://github.com/UBaksa">
          <FaGithub style={{ width: "20px", height: "20px" }} />
        </a>
      </p>
    </div>
  );
}
