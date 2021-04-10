import styles from "../styles/Home.module.css";
import Link from "next/link";

function Nav() {
  return (
    <section className={styles.header}>
      <Link href="/">
        <button className={`block round ${styles.logo} ${styles.header}`}>
          Be Healthy With Us
        </button>
      </Link>
      <Link href="/about">
        <button className={`block ${styles.navButton}`}>About</button>
      </Link>
    </section>
  );
}

export default Nav;
