import styles from "../styles/About.module.css";
import Nav from "../components/Nav";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/hand.png" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <img
          className={`block fixed ${styles.image}`}
          src="./newspaper.webp"
        ></img>
        <p className={`block fixed ${styles.description}`}>
          In the early- to mid-19th century, cholera tore through England,
          killing tens of thousands. The prevailing scientific theory of the day
          said that the disease was spread by foul air known as a “miasma.”
          <br />
          <br />
          Cholera is still killing lots of people because of unawareness in many
          countries' rural areas. In this era, lots of people still think it
          spread by foul air or curse.
          <br />
          <br />
          Follow simple 5 basic steps to stay away from Cholera and be healthy
          with us.
        </p>
      </div>
    </>
  );
}

export default About;
