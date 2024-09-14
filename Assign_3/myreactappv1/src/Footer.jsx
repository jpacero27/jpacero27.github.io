import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", padding: "20px", textAlign: "center" }}>
      <div>
        {/* Navigation Links */}
        <nav>
          <a href="#" style={{ margin: "0 15px", color: "white" }}>Home</a>
          <a href="#" style={{ margin: "0 15px", color: "white" }}>About</a>
          <a href="#" style={{ margin: "0 15px", color: "white" }}>Contact</a>
        </nav>
      </div>
      
      <div style={{ margin: "15px 0" }}>
        {/* Social Media Links */}
        <a href="https://www.facebook.com" style={{ margin: "0 10px", color:"white"} }>Facebook</a>
        <a href="https://www.twitter.com" style={{ margin: "0 10px", color:"white" }}>Twitter</a>
        <a href="https://www.instagram.com" style={{ margin: "0 10px" , color:"white"}}>Instagram</a>
      </div>
      
      <div>
        {/* Copyright */}
        <p>© {new Date().getFullYear()} JA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
