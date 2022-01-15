import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const FooterComponent = (props) => {
  return (
    <footer {...props}>
      <div className="footer-bottom">
        <span>
          {" "}
          © Copyright by <Link to={"https://cybersecurityworks.com/contact-us.php"}>Cyber Security Works Private Limited.</Link> All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
