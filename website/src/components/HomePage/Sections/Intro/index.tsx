import css from "./index.module.css";

const HomePage = (): JSX.Element => {
  return (
    <div className={css.mainContainer}>
      <p>It&apos;s a me,</p>
      <h1>Mario</h1>
      <h2>Full Stack Engineer</h2>

      <h3>
        I&apos;m a full stack engineer specializing in building (and
        occasionally designing) exceptional digital experiences.
      </h3>
    </div>
  );
};

export default HomePage;
