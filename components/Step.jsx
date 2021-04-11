import { Grid } from "@material-ui/core";
import styles from "../styles/Step.module.css";

function Step({ steps }) {
  const data = [
    {
      path: "./boil.png",
      title: "Boil Water",
      description:
        "Make sure to drink pure water by boiling. If boiling is not possible, you can use a chlorine product or household bleach.",
    },
    {
      path: "./soap.png",
      title: "Wash Hands",
      description:
        "Wash your hands after using latrine and cleaning child's bottom. Also wash your hand before and after caring for someone with cholera, preparing food and eating food.",
    },
    {
      path: "./latrine.png",
      title: "Use Latrine",
      description:
        "Use latrines. If you don't have latrine bury your poop. Do not poop in any body of water.",
    },
    {
      path: "./kitchen.png",
      title: "Clean Kitchen",
      description:
        "Clean the kitchen and in places where the family bathes and washes clothes.",
    },
    {
      path: "./cover_food.png",
      title: "Keep Food Covered",
      description:
        "Cook food well specially seafood. Keep food covered, and eat it hot. Peel fruits and vegetables.",
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
                  className={`block static accent ${styles.link}`}
                  href="https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water"
                  target="_blank"
                >
                  How to use bleach
                </a>
                <a
                  className={`block static accent ${styles.link}`}
                  href="https://www.cdc.gov/healthywater/drinking/public/water_disinfection.html"
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
