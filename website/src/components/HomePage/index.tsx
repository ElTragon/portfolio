import Page from "../utils/Page";
import css from "./index.module.css";
import Introduction from "./Sections/Introduction";

const HomePage = (): JSX.Element => {
  return (
    <Page>
      <main className={css.mainContainer}>
        <Introduction />
      </main>
    </Page>
  );
};

export default HomePage;
