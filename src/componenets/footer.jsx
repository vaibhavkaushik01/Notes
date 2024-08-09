import React from "react";

let date = new Date();
let currYear = date.getFullYear();

function Footer(){
    return <footer><p>copyright © {currYear}</p></footer>;
}

export default Footer;