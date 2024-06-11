"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import homeImage1 from "../images/home/Diabetes-bro.svg";
import homeImage2 from "../images/home/forensic_expert_amico.svg";
import homeImage3 from "../images/home/Researchers-bro.svg";

export default function Home() {
  const router = useRouter();

  return (
    <div className="m-0 p-0 md:px-36 py-12 overflow-hidden">
      <div className="flex flex-col gap-12 my-24 md:flex-row md:gap-24">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={homeImage1}
            alt="Transforming Diabetes Detection with Cutting-Edge Machine Learning"
            className="w-full max-w-full h-auto"
            width={600}
            height={600}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Transforming Diabetes Detection with Cutting-Edge Machine Learning
          </h1>
          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide text-center md:text-left">
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
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-12 items-center">
            <button
              className="bg-[#32CD82] rounded-full py-5 px-12 cursor-pointer border-none text-white text-lg md:text-xl font-bold tracking-wide transition duration-300 hover:bg-green-700"
              onClick={() => router.push("/how-it-work")}
            >
              Learn more
            </button>
            <button
              className="bg-[#32CD82] rounded-full py-5 px-12 cursor-pointer border-none text-white text-lg md:text-xl font-bold tracking-wide transition duration-300 hover:bg-green-700"
              onClick={() => router.push("/demo")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="my-36 flex flex-col gap-12">
        <h1 className="text-3xl md:text-4xl font-bold">Introduction</h1>

        <h2 className="text-2xl font-semibold">
          Overview of Diabetes and Its Global Impact:
        </h2>

        <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide">
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

        <h2 className="text-2xl font-semibold">
          The Importance of Early Detection and Diagnosis:
        </h2>

        <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide">
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

      <div className="flex flex-col gap-12 my-24 md:flex-row md:gap-24">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Features</h1>

          <h2 className="text-2xl font-semibold">
            Overview of Diabetes and Its Global Impact:
          </h2>

          <h3 className="text-xl font-semibold">High Accuracy:</h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Our system employs state-of-the-art machine learning algorithms
            trained on extensive datasets to ensure high accuracy in predicting
            diabetes. By continuously refining our models, we achieve precision
            that rivals traditional diagnostic methods.
          </p>

          <h3 className="text-xl font-semibold">Ease of Use:</h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Designed with user-friendliness in mind, our interface is simple and
            intuitive. Users can input their health data effortlessly and
            receive results quickly without needing specialized medical
            knowledge.
          </p>

          <h3 className="text-xl font-semibold">Quick Results:</h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Time is of the essence in healthcare. Our system provides rapid
            analysis and instant feedback, enabling users to take prompt action
            based on their risk assessment.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={homeImage2}
            alt=""
            className="w-full max-w-full h-auto"
            width={630}
            height={630}
          />
        </div>
      </div>

      <div className="flex flex-col gap-12 my-24 md:flex-row md:gap-24">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={homeImage3}
            alt=""
            className="w-full max-w-full h-auto"
            width={630}
            height={630}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">
            Comprehensive Data Analysis:
          </h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Our detection system analyzes a wide range of health metrics,
            including blood glucose levels, BMI, age, and family history, to
            provide a thorough assessment of diabetes risk.
          </p>

          <h3 className="text-xl font-semibold">Personalized Feedback:</h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Each user receives a personalized report detailing their risk
            factors and actionable steps they can take to manage or mitigate
            their diabetes risk.
          </p>

          <h3 className="text-xl font-semibold">Accessible Anywhere:</h3>

          <p className="text-base md:text-lg leading-6 md:leading-7 tracking-wide mb-6">
            Our web-based platform ensures that users can access the diabetes
            detection tool from anywhere with an internet connection, making it
            a convenient option for people in remote or underserved areas.
          </p>
        </div>
      </div>
    </div>
  );
}
