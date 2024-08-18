import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ResultsDisplay = ({ results, values }) => {
  const result = results.result; // Prediction result

  let riskScore = 0;
  let riskStatement = "";

  // Calculate riskScore only if result is "Negative"
  if (result === "Negative") {
    // Age-based risk
    if (values.age >= 45 && values.age < 60) riskScore += 1;
    else if (values.age >= 60) riskScore += 2;

    // Blood glucose levels (Fasting Plasma Glucose)
    if (values.bloodGlucose >= 126) {
      riskScore += 3; // Diabetes range
    } else if (values.bloodGlucose >= 100 && values.bloodGlucose < 126) {
      riskScore += 2; // Pre-diabetes range
    } else if (values.bloodGlucose >= 90 && values.bloodGlucose < 100) {
      riskScore += 1; // Slightly elevated
    }

    // BMI (Body Mass Index)
    if (values.bmi >= 30) {
      riskScore += 3; // Obesity
    } else if (values.bmi >= 25 && values.bmi < 30) {
      riskScore += 2; // Overweight
    } else if (values.bmi >= 23 && values.bmi < 25) {
      riskScore += 1; // High normal weight
    }

    // Smoking history
    if (values.smokingHistory === "0") {
      riskScore += 2; // Current smoker
    } else if (values.smokingHistory === "2") {
      riskScore += 1; // Past smoker
    }
    // Non-smoker ("1") doesn't add any points, so no action is needed

    // HbA1c (Glycated Hemoglobin)
    if (values.hba1c >= 6.5) {
      riskScore += 3; // Diabetes range
    } else if (values.hba1c >= 5.7 && values.hba1c < 6.5) {
      riskScore += 2; // Pre-diabetes range
    } else if (values.hba1c >= 5.5 && values.hba1c < 5.7) {
      riskScore += 1; // High normal
    }

    // Hypertension (High blood pressure)
    if (values.hypertension === 1) riskScore += 2;

    // Heart disease
    if (values.heartDisease === 1) riskScore += 3;

    // Gender-based risk adjustment
    if (values.gender === "Male") riskScore += 1;

    // Determine risk statement
    if (riskScore >= 5) {
      riskStatement = "High Risk";
    } else {
      riskStatement = "Low Risk";
    }
  }

  // Map riskScore to percentage
  const riskPercentage = (riskScore / 15) * 100; // Assuming 15 is the max score

  return (
    <div
      className={`p-4 mt-10 ${
        result === "Positive" ? "bg-red-100" : "bg-green-100"
      }  rounded-lg shadow-md flex flex-col gap-4`}
    >
      <h2 className="text-2xl font-bold">Prediction Results</h2>
      {result === "Positive" ? (
        <div>
          <p className="mt-2 text-lg text-red-500">
            <strong>Diabetes Prediction:</strong> You Have Diabetes
          </p>
          <p className="text-lg">
            <strong>Your Risk Level:</strong> Diagnosed Diabetes
          </p>
          <p className="mt-4 font-sans text-lg">
            Based on your input, you have diabetes. It's important to follow a
            management plan to maintain your health.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Personalized Recommendations
            </h3>
            <ul className="pl-5 mt-2 list-disc">
              <li>
                <strong>Healthy Diet:</strong> Follow a balanced diet rich in
                vegetables, whole grains, lean proteins, and healthy fats. Limit
                sugar, refined carbs, and saturated fats.{" "}
                <a href="#" className="text-blue-500">
                  Learn more about healthy eating.
                </a>
              </li>
              <li>
                <strong>Regular Exercise:</strong> Aim for at least 150 minutes
                of moderate-intensity exercise per week. Include strength
                training exercises at least twice a week.{" "}
                <a href="#" className="text-blue-500">
                  Discover exercise tips.
                </a>
              </li>
              <li>
                <strong>Medication Adherence:</strong> Take medications as
                prescribed by your healthcare provider. Monitor blood glucose
                levels regularly.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 ">
          <div>
            <p
              className={`mt-2 text-lg ${
                result === "Negative" ? " text-green-600" : "text-red-600"
              }`}
            >
              <strong>Diabetes Prediction:</strong>{" "}
              {result === "Negative" ? "You Do Not Have Diabetes" : "Unknown"}
            </p>
          </div>

          <div>
            <p
              className={`text-lg ${
                riskStatement === "High Risk"
                  ? " text-red-600"
                  : "text-green-600"
              }`}
            >
              <strong>Your Risk Level:</strong> {riskStatement || "Unknown"}
            </p>
          </div>

          <div className="flex items-center justify-center w-full md:justify-start">
            <div style={{ width: 150, height: 100 }}>
              <CircularProgressbar
                value={riskPercentage}
                text={`${Math.round(riskPercentage)}%`}
                styles={buildStyles({
                  pathColor: riskPercentage >= 50 ? "red" : "green",
                  textColor: riskPercentage >= 50 ? "red" : "green",
                })}
              />
            </div>
          </div>

          <div className="mt-4">
            <p
              className={`mt-4 text-lg font-serif ${
                riskStatement === "High Risk"
                  ? " text-red-600"
                  : "text-green-600"
              }`}
            >
              {riskStatement === "High Risk"
                ? "Based on your input, you have a high risk of developing diabetes. It's important to take proactive steps to manage your health and reduce this risk."
                : "You have a low risk of developing diabetes. Maintaining a healthy lifestyle is key to keeping this risk low."}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Personalized Recommendations
            </h3>
            <ul className="pl-5 mt-2 list-disc">
              <li>
                <strong>Healthy Diet:</strong>{" "}
                {riskStatement === "High Risk"
                  ? "Follow a balanced diet rich in vegetables, whole grains, lean proteins, and healthy fats. Limit sugar, refined carbs, and saturated fats."
                  : "Maintain a balanced diet to prevent diabetes. Focus on whole foods and limit processed foods."}
              </li>
              <li>
                <strong>Regular Exercise:</strong>{" "}
                {riskStatement === "High Risk"
                  ? "Aim for at least 150 minutes of moderate-intensity exercise per week. Include strength training exercises at least twice a week."
                  : "Engage in regular physical activity to maintain a healthy weight."}
              </li>
              {riskStatement === "High Risk" && (
                <li>
                  <strong>Medical Consultations:</strong> Schedule regular
                  check-ups with healthcare providers.
                </li>
              )}
              {riskStatement === "High Risk" && (
                <li>
                  <strong>Monitoring:</strong> Regularly monitor your blood
                  glucose levels.
                </li>
              )}
              {riskStatement !== "High Risk" && (
                <li>
                  <strong>Weight Management:</strong> Keep BMI within the
                  healthy range (18.5-24.9).
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
