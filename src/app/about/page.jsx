import Image from "next/image";
import aboutImage from "../../images/about/about1.svg";
import nextJs from "@/images/about/next-js.svg";
import pythonImage from "@/images/about/python-3.svg";
import tailwindLogo from "@/images/about/tailwindcss.svg";
import jupyter from "@/images/about/jupyter.svg";
import django from "@/images/about/django.svg";

const About = () => {
  return (
    <div className="px-8 overflow-hidden lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex flex-col gap-12 mt-5 mb-5 lg:mt-8 sm:mt-12 xl:mt-14">
        <h1 className="text-2xl font-bold ">Project Team:</h1>
        <div className="flex flex-col items-center justify-center flex-1 gap-2 sm:-mt-24 sm:flex-row-reverse 2xl">
          <div className="flex items-center justify-center mx-auto sm:w-1/2">
            <Image
              src={aboutImage}
              alt=""
              className="w-full h-auto max-w-full"
              width={630}
              height={630}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2">
            <h2 className="mt-2 text-base font-semibold md:text-lg">
              NADEERA D.L.P. - Project Lead
            </h2>
            <h3 className="text-base font-semibold md:text-lg">
              GUNATHILAKA R.K.W.
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              SURAWEERA S.A.D.S.N.
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              WANNIARACHCHI M.C.
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              KAVINDI W.P.T.
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              WEERAKOON D.D.
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 mx-auto mt-5 md:my-1 lg:-mt-5">
        <h1 className="text-2xl font-bold">Project Background:</h1>

        <h2 className="text-base font-semibold md:text-lg">
          The Motivation Behind the Project:
        </h2>

        <p className="-mt-4 text-sm leading-6 tracking-wide md:text-base">
          The prevalence of diabetes is increasing at an alarming rate
          worldwide, posing a significant health challenge. Many individuals are
          unaware of their condition until severe complications arise. Our
          motivation is to harness the power of technology to aid in the early
          detection of diabetes, enabling timely intervention and better
          management of the disease. By making advanced diagnostic tools more
          accessible, we aim to reduce the global burden of diabetes and improve
          health outcomes.
        </p>

        <h2 className="text-base font-semibold md:text-lg">
          The Problem Statement:
        </h2>

        <p className="-mt-4 text-sm leading-6 tracking-wide md:text-base">
          Diabetes often goes undiagnosed due to a lack of regular screening and
          awareness. Traditional diagnostic methods can be time-consuming and
          inaccessible to many, especially in remote or underserved areas. Our
          solution addresses this problem by providing a quick, accurate, and
          user-friendly tool for diabetes detection using machine learning. This
          approach allows for efficient screening, helping individuals identify
          their risk early and take preventive measures.
        </p>
      </div>

      <div className="pt-12">
        <h1 className="text-2xl font-bold">Technologies Used:</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-12 sm:mb-12">
          <div className="flex items-center justify-center w-20 h-20 rounded-lg">
            <Image src={nextJs} alt="NextJS" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 rounded-lg">
            <Image src={pythonImage} alt="Python" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 rounded-lg">
            <Image src={tailwindLogo} alt="Tailwind" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 rounded-lg">
            <Image src={jupyter} alt="Jupyter Notebook" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 rounded-lg">
            <Image src={django} alt="Django" />
          </div>

          <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-lg"></div>
        </div>
        <p className="mt-10 text-center lg:mb-40 md:text-base">
          Each of these technologies plays a crucial role in the development,
          deployment, and operation of our diabetes detection system,
          contributing to its robustness and reliability.
        </p>
      </div>
    </div>
  );
};

export default About;
