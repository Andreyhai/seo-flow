import React from "react";
import styles from "./HeroSection.module.scss";
import heroSVG from "../../../assets/hero.svg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Левая часть */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.default}>We’re strategic</span>
            <span className={styles.gold}>SEO Marketing</span>
            <span className={styles.default}>agency.</span>
          </h1>
          <p className={styles.description}>
            Spyro is a powerful landing pages builder WP theme that lets you
            build high converting landing pages using its specially crafted
            modules clubbed inside.
          </p>
          <a href="#" className={styles.button}>
            Get Started
          </a>
        </div>

        {/* Правая часть с SVG */}
        <div className={styles.image}>
          <img src={heroSVG} alt={heroSVG} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
