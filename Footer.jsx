import React from "react";
function Footer() {
  var curYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright @ {curYear}</p>
    </footer>
  );
}
export default Footer;
