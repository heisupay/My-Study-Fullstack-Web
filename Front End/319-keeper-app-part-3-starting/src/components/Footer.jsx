/** @format */

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} HeiSupay </p>
    </footer>
  );
}

export default Footer;
