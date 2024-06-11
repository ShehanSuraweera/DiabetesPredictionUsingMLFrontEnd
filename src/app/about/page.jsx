import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.firstContainer}>
        <div className={styles.firstContainerLeft}>
          <h1 className={styles.title_02}>Project Team:</h1>

          <h2 className={styles.title_03}>
            John Smith - Project Lead & Data Scientist:
          </h2>

          <p className={styles.desc_03}>
            John is a seasoned data scientist with over 10 years of experience
            in the field of machine learning and artificial intelligence. He
            holds a Ph.D. in Computer Science and has published numerous papers
            on predictive analytics and healthcare technology. John's leadership
            and expertise drive the innovative approach of our diabetes
            detection system.
          </p>

          <h3 className={styles.title_03}>Jane Doe - Frontend Developer:</h3>

          <p className={styles.desc_03}>
            Jane is a skilled frontend developer specializing in creating
            interactive and user-friendly web applications. With a background in
            computer engineering and a passion for UI/UX design, she ensures our
            platform is accessible and easy to navigate.
          </p>

          <h3 className={styles.title_03}>
            Michael Brown - Backend Developer:
          </h3>

          <p className={styles.desc_03}>
            Michael is an expert in backend development and database management.
            He has a master's degree in Software Engineering and has worked on
            various large-scale projects. Michael's role involves managing the
            server-side logic, ensuring data security, and maintaining the
            integrity of our system's operations.
          </p>
        </div>

        <div className={styles.firstContainerRight}>
          <Image
            src="/aboutImg.png"
            alt=""
            className={styles.heroImg}
            width={630}
            height={630}
          />
        </div>
      </div>

      <div className={styles.firstAditionalContainer}>
        <h3 className={styles.title_03}>
          Emily White - Machine Learning Engineer:
        </h3>

        <p className={styles.desc_03}>
          Emily specializes in building and optimizing machine learning models.
          With a background in mathematics and statistics, she has a deep
          understanding of algorithmic processes and data analysis. Emily's
          contributions are crucial in developing accurate and reliable
          predictive models for our diabetes detection system.
        </p>

        <h3 className={styles.title_03}>David Green - Health Consultant:</h3>

        <p className={styles.desc_03}>
          David is a certified health professional with a focus on diabetes care
          and management. He provides valuable insights into the clinical
          aspects of our project, ensuring that our system aligns with medical
          standards and practices. David's expertise helps bridge the gap
          between technology and healthcare.
        </p>

        <h3 className={styles.title_03}>David Green - Health Consultant:</h3>

        <p className={styles.desc_03}>
          David is a certified health professional with a focus on diabetes care
          and management. He provides valuable insights into the clinical
          aspects of our project, ensuring that our system aligns with medical
          standards and practices. David's expertise helps bridge the gap
          between technology and healthcare.
        </p>
      </div>

      <div className={styles.secondContainer}>
        <h1 className={styles.title_02}>Project Background:</h1>

        <h2 className={styles.title_03}>The Motivation Behind the Project: </h2>

        <p className={styles.desc_01}>
          The prevalence of diabetes is increasing at an alarming rate
          worldwide, posing a significant health challenge. Many individuals are
          unaware of their condition until severe complications arise. Our
          motivation is to harness the power of technology to aid in the early
          detection of diabetes, enabling timely intervention and better
          management of the disease. By making advanced diagnostic tools more
          accessible, we aim to reduce the global burden of diabetes and improve
          health outcomes.
        </p>

        <h2 className={styles.title_03}>The Problem Statement:</h2>

        <p className={styles.desc_01}>
          Diabetes often goes undiagnosed due to a lack of regular screening and
          awareness. Traditional diagnostic methods can be time-consuming and
          inaccessible to many, especially in remote or underserved areas. Our
          solution addresses this problem by providing a quick, accurate, and
          user-friendly tool for diabetes detection using machine learning. This
          approach allows for efficient screening, helping individuals identify
          their risk early and take preventive measures.
        </p>
      </div>

      <div className={styles.lastContainer}>
        <h1> Technologies Used: </h1>
        <div className={styles.cardtContainer}>
          <div className={styles.cardBlock}></div>
          <div className={styles.cardBlock}></div>
          <div className={styles.cardBlock}></div>
          <div className={styles.cardBlock}></div>
          <div className={styles.cardBlock}></div>
          <div className={styles.cardBlock}></div>
        </div>
        <p className={styles.lastPara}>
          Each of these technologies plays a crucial role in the development,
          deployment, and operation of our diabetes detection system,
          contributing to its robustness and reliability.
        </p>
      </div>
    </div>
  );
};

export default About;
