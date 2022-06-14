import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function SocialLinks() {
  return (
    <div>
      <a
        className="socials link"
        href="https://www.facebook.com/LerverketStockholm/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        className="socials link"
        href="https://www.instagram.com/lerverket/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
}
