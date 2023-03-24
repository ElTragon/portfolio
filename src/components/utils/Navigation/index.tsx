import css from "./index.module.css";

export default function Navigation() {
  return (
    <nav className={css.navContainer}>
      <div>
        <div className={css.linkContainer}>
          <a href="#AboutMe" className={css.link}>
            About Me
          </a>
          <a href="#Experience" className={css.link}>
            Experience
          </a>

          <a href="#Contact" className={css.link}>
            Contact
          </a>
          <a href="#Blog" className={css.link}>
            Blog
          </a>
        </div>

        <div>
          <a href="/resume" className={css.resume}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
