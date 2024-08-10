/** @format */

import React from "react";

function Footer() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <Footer>
      <p>
        Copyright
        {currentYear}
      </p>
    </Footer>
  );
}

export default Footer;
