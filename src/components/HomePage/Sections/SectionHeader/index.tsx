import css from "./index.module.css";

type Props = {
  num: string;
  title: string;
};

const SectionHeader = ({ num, title }: Props): JSX.Element => {
  return (
    <h2 className={css.title}>
      <span className={css.number}>{num}. </span>
      {title}
    </h2>
  );
};

export default SectionHeader;
