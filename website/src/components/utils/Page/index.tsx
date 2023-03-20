import { ReactNode } from "react";
import css from "./index.module.css";
import SEOHeader from "../SEOHeader";

type Props = {
  children?: ReactNode;
};

const Page = (props: Props): JSX.Element => {
  return (
    <div className={css.page}>
      <SEOHeader />
      {props.children}
    </div>
  );
};

export default Page;
