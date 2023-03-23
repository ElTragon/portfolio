import SectionHeader from "../SectionHeader";
import css from "./index.module.css";

const AboutMe = (): JSX.Element => {
  return (
    <div className={css.container}>
      <SectionHeader num={"01"} title={"About Me"} />

      <p>
        Hello! I&apos;m Mario and I focus on crafting high-quality digital
        experiences that are both functional and visually appealing. My career
        began at HelloAdvisr - turns out you can learn the fundamentals of Web
        development over a weekend before a interview Monday morning.
      </p>

      <p>
        Fast-forward to today, I have had the honor to work at Fintech,
        Pharmaceutical, and Database companies. Now I days I am looking for the
        next step in my career to build responsive and reliable products.
        whenever I can.
      </p>

      <p>
        Heres a short list of a few technologies I been working with recently
      </p>

      <div className={css.techContainer}>
        <ul>
          <li className={css.redText}>Javascript</li>
          <li className={css.redText}>React</li>
          <li className={css.redText}>Python</li>
        </ul>
        <ul>
          <li className={css.redText}>Typescript</li>
          <li className={css.redText}>NextJS</li>
          <li className={css.redText}>Golang</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
