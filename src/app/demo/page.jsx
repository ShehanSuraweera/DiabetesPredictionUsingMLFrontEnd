"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Popup from "../../components/popup/Popup";

const Demo = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    gender: "male",
    age: "",
    hypertension: "0",
    heartDisease: "",
    smokingHistory: "0",
    bmi: "",
    hba1c: "",
    bloodGlucose: "",
  });

  const [formErrors, setFormErrors] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heartDisease: "",
    smokingHistory: "",
    bmi: "",
    hba1c: "",
    bloodGlucose: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (value === "") {
      error = `Please enter ${name.replace(/([A-Z])/g, " $1")}`;
    } else if (Number(value) < 0) {
      error = "Please enter a valid input";
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    for (const key in formValues) {
      if (formValues[key] === "" || Number(formValues[key]) < 0) {
        errors[key] =
          formValues[key] === ""
            ? `Please enter ${key.replace(/([A-Z])/g, " $1")}`
            : "Please enter a valid input";
        valid = false;
      } else {
        errors[key] = "";
      }
    }

    setFormErrors(errors);

    if (valid) {
      // Make an API call to submit the form data
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });
        if (response.ok) {
          console.log(formValues);
          setPopupMessage("Submitted successfully!");
          setIsSuccess(true);
          setIsPopupVisible(true);

          // Wait a moment before redirecting to the results page
          setTimeout(() => {
            router.push("/results");
          }, 2000);
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setPopupMessage("Submission failed. Please try again.");
        setIsSuccess(false);
        setIsPopupVisible(true);
      }
    } else {
      setPopupMessage("Form has errors. Please fix them and try again.");
      setIsSuccess(false);
      setIsPopupVisible(false);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="m-0 p-5 pb-12 overflow-hidden md:px-36">
      <div className="my-12 flex flex-col gap-6 p-5">
        <h1 className="text-2xl font-bold">Need To Know ...</h1>
        <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Gender :</label>
            <select
              className="p-2 mb-4 rounded-full bg-green-300 border-2 border-transparent focus:border-green-600 transition-colors"
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Age :</label>
            <input
              className={`p-2 pl-5 rounded-full bg-green-300 border-2 transition-colors ${
                formErrors.age ? "border-red-500" : "border-transparent"
              } focus:border-green-600`}
              type="number"
              name="age"
              value={formValues.age}
              onChange={handleInputChange}
            />
            {formErrors.age && (
              <p className="text-red-500 text-sm mt-1">{formErrors.age}</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Hypertension :</label>
            <select
              className="p-2 mb-4 rounded-full bg-green-300 border-2 border-transparent focus:border-green-600 transition-colors"
              name="hypertension"
              value={formValues.hypertension}
              onChange={handleInputChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Heart Disease :</label>
            <input
              className={`p-2 pl-5 rounded-full bg-green-300 border-2 transition-colors ${
                formErrors.heartDisease
                  ? "border-red-500"
                  : "border-transparent"
              } focus:border-green-600`}
              type="number"
              name="heartDisease"
              value={formValues.heartDisease}
              onChange={handleInputChange}
            />
            {formErrors.heartDisease && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.heartDisease}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Smoking history :</label>
            <select
              className="p-2 mb-4 rounded-full bg-green-300 border-2 border-transparent focus:border-green-600 transition-colors"
              name="smokingHistory"
              value={formValues.smokingHistory}
              onChange={handleInputChange}
            >
              <option value="0">Current</option>
              <option value="1">Never</option>
              <option value="2">Former</option>
            </select>
            {formErrors.smokingHistory && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.smokingHistory}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">BMI :</label>
            <input
              className={`p-2 pl-5 rounded-full bg-green-300 border-2 transition-colors ${
                formErrors.bmi ? "border-red-500" : "border-transparent"
              } focus:border-green-600`}
              type="number"
              name="bmi"
              value={formValues.bmi}
              onChange={handleInputChange}
            />
            {formErrors.bmi && (
              <p className="text-red-500 text-sm mt-1">{formErrors.bmi}</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">HbA1c Level :</label>
            <input
              className={`p-2 pl-5 rounded-full bg-green-300 border-2 transition-colors ${
                formErrors.hba1c ? "border-red-500" : "border-transparent"
              } focus:border-green-600`}
              type="number"
              name="hba1c"
              value={formValues.hba1c}
              onChange={handleInputChange}
            />
            {formErrors.hba1c && (
              <p className="text-red-500 text-sm mt-1">{formErrors.hba1c}</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-1">Blood Glucose Level :</label>
            <input
              className={`p-2 pl-5 rounded-full bg-green-300 border-2 transition-colors ${
                formErrors.bloodGlucose
                  ? "border-red-500"
                  : "border-transparent"
              } focus:border-green-600`}
              type="number"
              name="bloodGlucose"
              value={formValues.bloodGlucose}
              onChange={handleInputChange}
            />
            {formErrors.bloodGlucose && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.bloodGlucose}
              </p>
            )}
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="py-2 px-8 border-none rounded-full bg-green-600 text-white text-lg cursor-pointer hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {isPopupVisible && (
        <Popup
          message={popupMessage}
          isSuccess={isSuccess}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Demo;
