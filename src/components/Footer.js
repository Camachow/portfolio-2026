import React from "react";
import { content } from "../content";

function Footer({ language }) {
  const copy = content[language] || content.pt;

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {copy.footer.copy}</p>
      </div>
    </footer>
  );
}

export default Footer;
