import React from "react";

function Footer() {
    const date=new Date();
    const year=date.getFullYear();
    return <footer><p>© {year} Ayush Trivedi</p></footer>;
}

export default Footer;