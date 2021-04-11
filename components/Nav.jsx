import styles from "../styles/Nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <section className={styles.header}>
      <Link href="/">
        <button className={`block static round ${styles.logo}`}>
          Be Healthy With Us
        </button>
      </Link>
      <Link href="/about">
        <button className={`block static ${styles.navButton}`}>About</button>
      </Link>
    </section>
  );
}

export default Nav;
