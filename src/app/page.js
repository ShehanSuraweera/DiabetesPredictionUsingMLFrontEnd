"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import homeImage1 from "../images/home/Diabetes-bro.svg";
import homeImage2 from "../images/home/forensic_expert_amico.svg";
import homeImage3 from "../images/home/Researchers-bro.svg";

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-0 px-10 py-1 m-0 overflow-hidden xl:px-36">
      <div className="flex flex-col items-center justify-center gap-12 mt-8 mb-4 md:flex-row md:gap-10 lg:gap-2">
        <div className="items-start justify-center flex-1 hidden lg:flex ">
          <Image
            src={homeImage1}
            alt="Transforming Diabetes Detection with Cutting-Edge Machine Learning"
            className="w-full "
            width={500}
            height={500}
          />
        </div>
        <div className="items-center justify-center flex-1">
          <h1 className="text-3xl font-bold sm:mb-12 md:text-4xl lg:text-5xl">
            Transforming Diabetes Detection with Cutting-Edge Machine Learning
          </h1>
          <div className="flex items-start justify-center flex-1 lg:hidden ">
            <Image
              src={homeImage1}
              alt="Transforming Diabetes Detection with Cutting-Edge Machine Learning"
              className="w-full sm:w-1/2 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-sm leading-6 tracking-wide text-center md:text-base md:leading-7 md:text-left">
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
          <div className="flex flex-row items-center justify-center gap-6 mt-6 md:flex-row md:gap-12 md:mt-12">
            <button
              className="bg-[#32CD82] rounded-full py-2 xl:py-5 xl:px-12 w-[50%] cursor-pointer border-none text-white text-lg md:text-xl font-medium sm:font-bold tracking-wide transition duration-300 hover:bg-green-700"
              onClick={() => router.push("/how-it-work")}
            >
              Learn more
            </button>
            <button
              className="bg-[#32CD82] rounded-full py-2 xl:py-5 xl:px-12 w-[50%]  cursor-pointer border-none text-white text-lg md:text-xl font-medium sm:font-bold tracking-wide transition duration-300 hover:bg-green-700"
              onClick={() => router.push("/demo")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-3 sm:gap-12 sm:my-10">
        <h1 className="text-3xl font-bold md:text-4xl">Introduction</h1>

        <h2 className="text-lg font-semibold sm:text-2xl">
          Overview of Diabetes and Its Global Impact:
        </h2>

        <p className="text-sm leading-6 tracking-wide sm:text-base md:leading-7 md:-mt-8">
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

        <h2 className="text-lg font-semibold sm:text-2xl">
          The Importance of Early Detection and Diagnosis:
        </h2>

        <p className="text-sm leading-6 tracking-wide sm:text-base md:leading-7 md:-mt-8">
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

      <div className="flex flex-col items-start justify-center gap-12 mb-5 mt-7 sm:items-center sm:mt-24 md:flex-row xl:gap-24">
        <div className="flex-1">
          <h1 className="text-3xl font-bold md:text-4xl">Features</h1>

          {/* <div className="block pl-5 mt-4 text-sm font-semibold sm:hidden">
            <ul>
              <li>High Accuracy</li>
              <li>Ease of Use</li>
              <li>Quick Results</li>
              <li>Comprehensive Data Analysis</li>
              <li>Personalized Feedback</li>
              <li>Accessible Anywhere</li>
            </ul>
          </div> */}

          <h3 className="mt-5 text-base font-semibold sm:text-xl">
            High Accuracy:
          </h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7 ">
            Our system employs state-of-the-art machine learning algorithms
            trained on extensive datasets to ensure high accuracy in predicting
            diabetes. By continuously refining our models, we achieve precision
            that rivals traditional diagnostic methods.
          </p>

          <h3 className="text-base font-semibold sm:text-xl">Ease of Use:</h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7">
            Designed with user-friendliness in mind, our interface is simple and
            intuitive. Users can input their health data effortlessly and
            receive results quickly without needing specialized medical
            knowledge.
          </p>

          <h3 className="text-base font-semibold sm:text-xl">Quick Results:</h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7">
            Time is of the essence in healthcare. Our system provides rapid
            analysis and instant feedback, enabling users to take prompt action
            based on their risk assessment.
          </p>
        </div>
        <div className="flex items-center justify-center flex-1">
          <Image
            src={homeImage2}
            alt=""
            className="w-full h-auto max-w-full"
            width={630}
            height={630}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-12 sm:mb-10 sm:items-center md:flex-row xl:gap-24">
        <div className="flex items-center justify-center flex-1 order-last md:order-none">
          <Image
            src={homeImage3}
            alt=""
            className="w-full h-auto max-w-full"
            width={630}
            height={630}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold sm:text-xl ">
            Comprehensive Data Analysis
          </h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7">
            Our detection system analyzes a wide range of health metrics,
            including blood glucose levels, BMI, age, and family history, to
            provide a thorough assessment of diabetes risk.
          </p>

          <h3 className="text-base font-semibold sm:text-xl">
            Personalized Feedback
          </h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7 ">
            Each user receives a personalized report detailing their risk
            factors and actionable steps they can take to manage or mitigate
            their diabetes risk.
          </p>

          <h3 className="text-base font-semibold sm:text-xl">
            Accessible Anywhere
          </h3>

          <p className="mb-6 text-sm leading-6 tracking-wide sm:text-base md:leading-7 ">
            Our web-based platform ensures that users can access the diabetes
            detection tool from anywhere with an internet connection, making it
            a convenient option for people in remote or underserved areas.
          </p>
        </div>
      </div>
    </div>
  );
}
