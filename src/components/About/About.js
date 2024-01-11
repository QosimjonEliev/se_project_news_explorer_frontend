import { React } from "react";
import authorImage from "../../images/authorImage.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img className="about__image-author" src={authorImage} alt="author avatar"></img>
      </div>
      <div className="about__info-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
        I developed this web application as a crucial component of my TripleTen graduation project. As a Full-Stack Software Engineer situated in Brooklyn, NY.
        </p>
        <p className="about__text">
        In the past nine months, I've actively pursued my aspiration of entering the tech industry as an engineer. My experience at TripleTen has been
          instrumental in honing my skills across a diverse array of languages, frameworks, and tools. I've adeptly worked with HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, MongoDB, Google Cloud, Babel, NPM, and Webpack. Additionally.
        </p>
      </div>
    </section>
  );
}

export default About;
