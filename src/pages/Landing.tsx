import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PageAnimation from "../components/PageAnimation";

export default function Landing() {
  return (
    <PageAnimation>
      <section className="landing-page">
        <div className="hero-overlay">
          <div className="center-content__wrapper">
            <h1 className="landing__headline">
              Lär dig keramik &amp; skulptur
            </h1>
            <div className="action-button__wrapper">
              <Link className="action-button link" to="/konst">
                {" "}
                <MdOutlineArrowForwardIos className="action-button__arrow" />
                Se verk
              </Link>
              <Link className="action-button link" to="/kontakt">
                {" "}
                <MdOutlineArrowForwardIos className="action-button__arrow" />
                Hitta hit
              </Link>
            </div>
          </div>
          <div className="socials--desktop">
            <Link className="landing__socials" to="/instagram">
              <RiInstagramFill />
            </Link>
            <Link className="landing__socials" to="/facebook">
              <RiFacebookCircleFill />
            </Link>
          </div>
        </div>
      </section>
    </PageAnimation>
  );
}
