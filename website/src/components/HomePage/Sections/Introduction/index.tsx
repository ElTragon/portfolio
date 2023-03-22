import css from "./index.module.css";

const Introduction = (): JSX.Element => {
  return (
    <div className={css.container}>
      <p>It&apos;s a me,</p>
      <h1>
        Mario
        <span className={css.fadeIn}> Lopez</span>
      </h1>
      <h2>Full Stack Engineer</h2>

      <h3>
        I&apos;m a engineer specializing in building (and occasionally
        designing) exceptional digital experiences.
      </h3>
    </div>
  );
};

export default Introduction;
