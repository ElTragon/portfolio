import Page from "../utils/Page";
import css from "./index.module.css";
import Introduction from "./Introduction";
import AboutMe from "./Sections/AboutMe";

const HomePage = (): JSX.Element => {
  return (
    <Page>
      <main className={css.mainContainer}>
        <Introduction />
        <AboutMe />
      </main>
    </Page>
  );
};

export default HomePage;
