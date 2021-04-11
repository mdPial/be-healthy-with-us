import { useState } from "react";
import styles from "../styles/Cholera.module.css";
import Step from "../components/Step";
import Nav from "../components/Nav";
import Head from "next/head";

function Cholera() {
  const [steps, setSteps] = useState(0);
  return (
    <>
      <Head>
        <title>Solution For Cholera</title>
        <link rel="icon" href="/hand.png" />
      </Head>
      <Nav />
      <div className={styles.container}>
        {steps != 5 && (
          <>
            <Step steps={steps} />
            <div className={styles.buttonContainer}>
              {steps > 0 && (
                <button
                  onClick={() => {
                    setSteps(steps - 1);
                  }}
                  className={`block static ${styles.button}`}
                >
                  previous
                </button>
              )}
              <button
                onClick={() => {
                  setSteps(steps + 1);
                }}
                className={`block static ${styles.button}`}
              >
                next
              </button>
            </div>
          </>
        )}
        {steps == 5 && (
          <>
            <img src="./hand.png" className={`${styles.image}`} />
            <h1 className={styles.message}>Just Remember This</h1>
            <button
              onClick={() => {
                setSteps(steps - 1);
              }}
              className={`block static ${styles.button}`}
            >
              back
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cholera;
