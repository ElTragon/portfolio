import css from "./index.module.css";
import Introduction from "./Sections/Introduction";

const HomePage = (): JSX.Element => {
  return (
    <main className={css.mainContainer}>
      <Introduction />
    </main>
  );
};

export default HomePage;
