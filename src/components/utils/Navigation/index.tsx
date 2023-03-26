import css from "./index.module.css";

export default function Navigation() {
  return (
    <nav className={css.navContainer}>
      <div className={css.linkContainer}>
        <a href="#AboutMe" className={css.link}>
          <span className={css.number}>01. </span>About Me
        </a>
        <a href="#Experience" className={css.link}>
          <span className={css.number}>02. </span>Experience
        </a>

        <a href="#Contact" className={css.link}>
          <span className={css.number}>03. </span>Contact
        </a>
        <a href="/blog" className={css.link}>
          <span className={css.number}>04. </span>Blog
        </a>
      </div>

      <div>
        <a href="/resume" className={css.resume}>
          Resume
        </a>
      </div>
    </nav>
  );
}
