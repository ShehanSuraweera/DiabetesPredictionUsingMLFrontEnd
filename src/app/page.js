"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.topContainerLeft}>
          <Image
            src="/img01.png"
            alt=""
            className={styles.heroImg}
            width={600}
            height={600}
          />
        </div>
        <div className={styles.topContainerRight}>
          <h1 className={styles.top_title}>
            Transforming Diabetes Detection with Cutting-Edge Machine Learning
          </h1>
          <p className={styles.desc_01}>
            Welcome to our Diabetes Detection Project, where innovation meets
            healthcare. Leveraging the power of advanced machine learning
            algorithms, we provide a revolutionary approach to early and
            accurate diabetes diagnosis. Our system is designed to offer swift,
            reliable predictions, empowering individuals and healthcare
            providers to make informed decisions and take proactive steps in
            managing diabetes. Discover how technology is shaping the future of
            health diagnostics and join us in our mission to combat diabetes
            globally.
          </p>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => router.push("/learn-more")}
            >
              Learn more
            </button>
            <button
              className={styles.button}
              onClick={() => router.push("/demo")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <h1 className={styles.title_02}>Intoduction</h1>

        <h2 className={styles.title_03}>
          Overview of Diabetes and Its Global Impact:
        </h2>

        <p className={styles.desc_01}>
          Diabetes is a chronic condition that affects millions of people
          worldwide, characterized by elevated blood sugar levels due to the
          body's inability to produce or effectively use insulin. As of 2023,
          approximately 463 million adults are living with diabetes, and this
          number is expected to rise to 700 million by 2045. The global burden
          of diabetes is immense, leading to serious complications such as heart
          disease, stroke, kidney failure, and lower limb amputation. Beyond the
          physical and emotional toll, diabetes imposes significant economic
          costs on healthcare systems and societies.
        </p>

        <h2 className={styles.title_03}>
          The Importance of Early Detection and Diagnosis:
        </h2>

        <p className={styles.desc_01}>
          Early detection and timely intervention are crucial in managing
          diabetes effectively. Identifying diabetes in its early stages allows
          individuals to make necessary lifestyle changes, adhere to medication
          regimens, and avoid or delay the onset of complications. Early
          diagnosis not only improves the quality of life for individuals but
          also reduces healthcare costs by preventing severe and costly health
          issues. However, many cases of diabetes go undiagnosed due to lack of
          access to healthcare, limited awareness, and insufficient screening.
          Our project aims to bridge this gap by providing a reliable,
          accessible tool for early diabetes detection using advanced machine
          learning techniques.
        </p>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.thirdContainerLeft}>
          <h1 className={styles.title_02}>Features</h1>

          <h2 className={styles.title_03}>
            Overview of Diabetes and Its Global Impact:
          </h2>

          <h3 className={styles.title_03}>High Accuracy:</h3>

          <p className={styles.desc_03}>
            Our system employs state-of-the-art machine learning algorithms
            trained on extensive datasets to ensure high accuracy in predicting
            diabetes. By continuously refining our models, we achieve precision
            that rivals traditional diagnostic methods.
          </p>

          <h3 className={styles.title_03}>Ease of Use:</h3>

          <p className={styles.desc_03}>
            Designed with user-friendliness in mind, our interface is simple and
            intuitive. Users can input their health data effortlessly and
            receive results quickly without needing specialized medical
            knowledge.
          </p>

          <h3 className={styles.title_03}>Quick Results:</h3>

          <p className={styles.desc_03}>
            Time is of the essence in healthcare. Our system provides rapid
            analysis and instant feedback, enabling users to take prompt action
            based on their risk assessment.
          </p>
        </div>
        <div className={styles.thirdContainerRight}>
          <Image
            src="/img02.png"
            alt=""
            className={styles.heroImg}
            width={630}
            height={630}
          />
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.thirdContainerRight}>
          <Image
            src="/img03.png"
            alt=""
            className={styles.heroImg}
            width={630}
            height={630}
          />
        </div>
        <div className={styles.thirdContainerLeft}>
          <h3 className={styles.title_03}>Comprehensive Data Analysis:</h3>

          <p className={styles.desc_03}>
            Our detection system analyzes a wide range of health metrics,
            including blood glucose levels, BMI, age, and family history, to
            provide a thorough assessment of diabetes risk.
          </p>

          <h3 className={styles.title_03}>Personalized Feedback:</h3>

          <p className={styles.desc_03}>
            Each user receives a personalized report detailing their risk
            factors and actionable steps they can take to manage or mitigate
            their diabetes risk.
          </p>

          <h3 className={styles.title_03}>Accessible Anywhere:</h3>

          <p className={styles.desc_03}>
            Our web-based platform ensures that users can access the diabetes
            detection tool from anywhere with an internet connection, making it
            a convenient option for people in remote or underserved areas.
          </p>
        </div>
      </div>

      
    </div>
  );
}
