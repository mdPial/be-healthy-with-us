import styles from "../styles/About.module.css";
import Nav from "../components/Nav";

function About() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <img
          className={`block fixed ${styles.image}`}
          src="./newspaper.webp"
        ></img>
        <p className={`block fixed ${styles.description}`}>
          In the early- to mid-19th century, cholera tore through England,
          killing tens of thousands. The prevailing scientific theory of the day
          said that the disease was spread by foul air known as a “miasma.” But
          a British doctor named John Snow suspected that the mysterious
          disease, which killed its victims within days of the first symptoms,
          lurked in London’s drinking water. Snow acted like a scientific
          Sherlock Holmes, investigating hospital records and morgue reports to
          track the precise locations of deadly outbreaks. He created a
          geographic chart of cholera deaths over a 10-day period and found a
          cluster of 500 fatal infections surrounding the Broad Street pump, a
          popular city well for drinking water. “As soon as I became acquainted
          with the situation and extent of this irruption (sic) of cholera, I
          suspected some contamination of the water of the much-frequented
          street-pump in Broad Street,” wrote Snow. With dogged effort, Snow
          convinced local officials to remove the pump handle on the Broad
          Street drinking well, rendering it unusable, and like magic the
          infections dried up. Snow’s work didn’t cure cholera overnight, but it
          eventually led to a global effort to improve urban sanitation and
          protect drinking water from contamination. While cholera has largely
          been eradicated in developed countries, it’s still a persistent killer
          in third-world countries lacking adequate sewage treatment and access
          to clean drinking water.
        </p>
      </div>
    </>
  );
}

export default About;
