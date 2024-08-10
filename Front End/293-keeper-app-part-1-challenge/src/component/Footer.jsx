/** @format */

import React from "react";

function Footer() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <Footer>
      <p>
        Copyright 2024 | by HeiSupay
        {currentYear}
      </p>
    </Footer>
  );
}

export default Footer;
