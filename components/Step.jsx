import { Grid } from "@material-ui/core";
import styles from "../styles/Cholera.module.css";

function Step({ steps }) {
  const data = [
    {
      path: "./boil.png",
      title: "Boil Water",
      description:
        "Make sure to drink pure water by boiling. If boiling is not possible, you can use a chlorine product. If a chlorine treatment product is not available, you can treat your water with household bleach.",
    },
    {
      path: "./soap.png",
      title: "Wash Hands",
      description:
        "Wash your hands often with soap and safe water after using latrine, cleaning child's bottom, before and after caring for someone with cholera and preparing food.",
    },
    {
      path: "./latrine.png",
      title: "Use Latrine",
      description:
        "Use latrines or bury your poop, do not poop in any body of water.",
    },
    {
      path: "./cover_food.png",
      title: "Keep Food Covered",
      description:
        "Cook food well (especially seafood), keep it covered, and eat it hot. Peel fruits and vegetables.",
    },
    {
      path: "./kitchen.png",
      title: "Clean Kitchen",
      description:
        "Clean up safely in the kitchen and in places where the family bathes and washes clothes.",
    },
    {
      path: "./kitchen.png",
      title: "end",
      description:
        "Clean up safely in the kitchen and in places where the family bathes and washes clothes.",
    },
  ];
  return (
    <Grid>
      <div className={`block fixed ${styles.description}`}>
        <Grid>
          <img className={styles.image} src={data[steps].path} />
        </Grid>
        <Grid>
          <div className={`card ${styles.stepsContainer}`}>
            <h1 className={styles.stepsTitle}>{data[steps].title}</h1>
            <p className={styles.stepsDescription}>{data[steps].description}</p>
            {steps == 0 && (
              <div>
                <a
                  className={`block accent ${styles.link}`}
                  href="https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water"
                  target="_blank"
                >
                  How to use bleach
                </a>
                <a
                  className={`block accent ${styles.link}`}
                  href="https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water"
                  target="_blank"
                >
                  How to use chlorine
                </a>
              </div>
            )}
          </div>
        </Grid>
      </div>
    </Grid>
  );
}

export default Step;
