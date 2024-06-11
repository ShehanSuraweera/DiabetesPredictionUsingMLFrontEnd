import Image from "next/image";
import aboutImage from "../../images/about/about1.svg";

const About = () => {
  return (
    <div className="m-0 px-8 pb-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 mt-24 mb-5 px-8">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className="text-2xl font-bold">Project Team:</h1>

          <h2 className="text-xl font-semibold">
            John Smith - Project Lead & Data Scientist:
          </h2>

          <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
            John is a seasoned data scientist with over 10 years of experience
            in the field of machine learning and artificial intelligence. He
            holds a Ph.D. in Computer Science and has published numerous papers
            on predictive analytics and healthcare technology. John's leadership
            and expertise drive the innovative approach of our diabetes
            detection system.
          </p>

          <h3 className="text-xl font-semibold">
            Jane Doe - Frontend Developer:
          </h3>

          <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
            Jane is a skilled frontend developer specializing in creating
            interactive and user-friendly web applications. With a background in
            computer engineering and a passion for UI/UX design, she ensures our
            platform is accessible and easy to navigate.
          </p>

          <h3 className="text-xl font-semibold">
            Michael Brown - Backend Developer:
          </h3>

          <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
            Michael is an expert in backend development and database management.
            He has a master's degree in Software Engineering and has worked on
            various large-scale projects. Michael's role involves managing the
            server-side logic, ensuring data security, and maintaining the
            integrity of our system's operations.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center mx-auto">
          <Image
            src={aboutImage}
            alt=""
            className="w-full max-w-full h-auto"
            width={630}
            height={630}
          />
        </div>
      </div>

      <div className="my-0 mb-36 flex flex-col gap-12 px-3">
        <h3 className="text-xl font-semibold">
          Emily White - Machine Learning Engineer:
        </h3>

        <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
          Emily specializes in building and optimizing machine learning models.
          With a background in mathematics and statistics, she has a deep
          understanding of algorithmic processes and data analysis. Emily's
          contributions are crucial in developing accurate and reliable
          predictive models for our diabetes detection system.
        </p>

        <h3 className="text-xl font-semibold">
          David Green - Health Consultant:
        </h3>

        <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
          David is a certified health professional with a focus on diabetes care
          and management. He provides valuable insights into the clinical
          aspects of our project, ensuring that our system aligns with medical
          standards and practices. David's expertise helps bridge the gap
          between technology and healthcare.
        </p>

        <h3 className="text-xl font-semibold">
          David Green - Health Consultant:
        </h3>

        <p className="text-sm leading-6 tracking-wide pl-5 text-left mb-5">
          David is a certified health professional with a focus on diabetes care
          and management. He provides valuable insights into the clinical
          aspects of our project, ensuring that our system aligns with medical
          standards and practices. David's expertise helps bridge the gap
          between technology and healthcare.
        </p>
      </div>

      <div className="my-36 flex flex-col gap-12 w-4/5 mx-auto">
        <h1 className="text-2xl font-bold">Project Background:</h1>

        <h2 className="text-xl font-semibold">
          The Motivation Behind the Project:{" "}
        </h2>

        <p className="text-base leading-6 tracking-wide">
          The prevalence of diabetes is increasing at an alarming rate
          worldwide, posing a significant health challenge. Many individuals are
          unaware of their condition until severe complications arise. Our
          motivation is to harness the power of technology to aid in the early
          detection of diabetes, enabling timely intervention and better
          management of the disease. By making advanced diagnostic tools more
          accessible, we aim to reduce the global burden of diabetes and improve
          health outcomes.
        </p>

        <h2 className="text-xl font-semibold">The Problem Statement:</h2>

        <p className="text-base leading-6 tracking-wide">
          Diabetes often goes undiagnosed due to a lack of regular screening and
          awareness. Traditional diagnostic methods can be time-consuming and
          inaccessible to many, especially in remote or underserved areas. Our
          solution addresses this problem by providing a quick, accurate, and
          user-friendly tool for diabetes detection using machine learning. This
          approach allows for efficient screening, helping individuals identify
          their risk early and take preventive measures.
        </p>
      </div>

      <div className="py-12">
        <h1 className="text-2xl font-bold">Technologies Used:</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-12 mb-12">
          <div className="bg-teal-500 rounded-lg  w-40 h-40 flex items-center justify-center"></div>
          <div className="bg-teal-500 rounded-lg w-40 h-40 flex items-center justify-center"></div>
          <div className="bg-teal-500 rounded-lg w-40 h-40 flex items-center justify-center"></div>
          <div className="bg-teal-500 rounded-lg w-40 h-40 flex items-center justify-center"></div>
          <div className="bg-teal-500 rounded-lg w-40 h-40 flex items-center justify-center"></div>
          <div className="bg-teal-500 rounded-lg w-40 h-40 flex items-center justify-center"></div>
        </div>
        <p className="mt-40 text-center">
          Each of these technologies plays a crucial role in the development,
          deployment, and operation of our diabetes detection system,
          contributing to its robustness and reliability.
        </p>
      </div>
    </div>
  );
};

export default About;
