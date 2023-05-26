import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span></span>
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Denuncie</span>
          <span>Depoimentos</span>
          <span></span>
        </div>
        <div className="footer-section-columns">
          <span>(81) 9384-9292</span>
          <span>denunciaA.se@gmail.com</span>
          <span>imprensaA.se@gmail.com</span>
          <span>contatoA.se@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Politica de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;