import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.heading}>
    <Link href="/">
      <a>
        <h1>
          <span>Marc Barbeau</span>
          <small>Software Engineer</small>
        </h1>
      </a>
    </Link>
  </header>
);
