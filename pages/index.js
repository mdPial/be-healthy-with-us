import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/hand.png" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Stay Away From Cholera</h1>
        <img className={`block fixed ${styles.image}`} src="./newspaper.webp" />

        <Link href="/cholera">
          <button className={`block ${styles.bigButton}`}>continue</button>
        </Link>
      </main>
    </div>
  );
}
