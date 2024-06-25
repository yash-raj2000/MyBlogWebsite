import React from "react";

function Footer() {
  let currenYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <span>&#169; </span>
        COPYRIGHT {currenYear}- Yashraj Singh
      </footer>
    </>
  );
}

export default Footer;
