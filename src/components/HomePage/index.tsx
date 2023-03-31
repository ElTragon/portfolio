import Page from "../utils/Page";
import css from "./index.module.css";
import Introduction from "./Introduction";
import AboutMe from "./Sections/AboutMe";
import ContactMe from "./Sections/ContactMe";
import Experience from "./Sections/Experience";

const HomePage = (): JSX.Element => {
  return (
    <Page>
      <main className={css.mainContainer}>
        <Introduction />
        <AboutMe />
        <Experience />
        <ContactMe />
      </main>
    </Page>
  );
};

export default HomePage;
