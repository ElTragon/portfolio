import { ReactNode } from "react";
import css from "./index.module.css";
import SEOHeader from "../SEOHeader";
import Navigation from "../Navigation";

type Props = {
  children?: ReactNode;
};

const Page = (props: Props): JSX.Element => {
  return (
    <div className={css.page}>
      <SEOHeader />
      <Navigation />
      {props.children}
    </div>
  );
};

export default Page;
