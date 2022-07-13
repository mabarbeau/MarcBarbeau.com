import Link from "next/link";
import styles from "./styles.module.css";

export const Navigation = () => (
  <div className={styles.navigation}>
    <Link href="/cv">
      <a className={styles.card}>
        <h2>Learn &rarr;</h2>
        <p>Read more about my background and what I&#x27;m working on today.</p>
      </a>
    </Link>

    <Link href="https://github.com/mabarbeau/">
      <a className={styles.card}>
        <h2>Explore &rarr;</h2>
        <p>Preview past projects I&#x27;m happy to publicly share.</p>
      </a>
    </Link>

    <Link href="https://www.linkedin.com/in/barbeaumarc/">
      <a className={styles.card}>
        <h2>Contact &rarr;</h2>
        <p>Want to get in touch? I&#x27;d love to hear from you.</p>
      </a>
    </Link>

    <Link href="https://www.linkedin.com/in/barbeaumarc/">
      <a className={styles.card}>
        <h2>Subscribe &rarr;</h2>
        <p>Want to hear from me when I&#x27;m available for work?</p>
      </a>
    </Link>
  </div>
);
