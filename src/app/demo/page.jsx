"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Popup from "../../components/popup/Popup";
import { Select, SelectItem, Input } from "@nextui-org/react";
import faqImage from "@/images/demo/demo.svg";
import Image from "next/image";
import { result } from "@/utility/api/result.api";
import ResultsDisplay from "../../components/ResultsDisplay";

const Demo = () => {
  const router = useRouter();
  let riskScore = 0;

  const [formValues, setFormValues] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heartDisease: "",
    smokingHistory: "",
    bmi: "",
    hba1c: "",
    bloodGlucose: "",
  });

  const [bmiValue, setBmiValue] = useState({
    weight: "",
    height: "",
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
    weight: "",
    height: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchedGender, setTouchedGender] = useState(false);
  const [touchedHypertension, setTouchedHypertension] = useState(false);
  const [touchedHeartDisease, setTouchedHeartDiseas] = useState(false);
  const [touchedSmokingHistory, setTouchedSmokingHistory] = useState(false);
  const [predictionResults, setPredictionResults] = useState(null);
  const resultsRef = useRef(null);
  const [isBmiDirect, setIsBmiDirect] = useState(false);

  useEffect(() => {
    if (!isBmiDirect) {
      const calculateBMI = () => {
        const { weight, height } = bmiValue;
        if (weight && height) {
          const bmi = (weight / (height * height)).toFixed(2);
          setFormValues({ ...formValues, bmi });
        }
      };

      calculateBMI();
    }
  }, [bmiValue, isBmiDirect]);

  const handleSelectChange = (key, name) => {
    const value = key.anchorKey;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value > 0) {
      if (name === "weight" || name === "height") {
        setBmiValue((prev) => ({ ...prev, [name]: parseFloat(value) }));
      } else {
        setFormValues((prev) => ({ ...prev, [name]: value }));
      }
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = "";
    if (value === "") {
      error = `Please enter ${name.replace(/([A-Z])/g, " $1")}`;
    } else if (Number(value) <= 0) {
      error = "Please enter a valid input";
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    for (const key in formValues) {
      if (
        (isBmiDirect &&
          key !== "weight" &&
          key !== "height" &&
          formValues[key] === "") ||
        (!isBmiDirect && key !== "bmi" && formValues[key] === "")
      ) {
        errors[key] = `Please enter ${key.replace(/([A-Z])/g, " $1")}`;
        valid = false;
      }
    }

    setFormErrors(errors);

    const extractNumber = (str) => {
      const numericString = str.replace(/[^0-9]/g, "");

      // Parse the resulting string as an integer
      return parseInt(numericString, 10);
    };

    if (valid) {
      // Make an API call to submit the form data
      const values = {
        gender: formValues.gender,
        age: parseInt(formValues.age, 10),
        heart_disease: extractNumber(formValues.heartDisease, 10),
        hypertension: extractNumber(formValues.hypertension, 10),
        smoking_history: extractNumber(formValues.smokingHistory, 10),
        bmi: parseInt(formValues.bmi),
        HbA1c_level: parseInt(formValues.hba1c),
        blood_glucose_level: parseInt(formValues.bloodGlucose),
      };

      try {
        const response = await result(values);

        if (response.status === 200) {
          const responseData = response.data;
          setPredictionResults({
            result: String(responseData.result),
            statement: String(responseData.statement),
          });
          // Scroll to the ResultsDisplay component
          if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: "smooth" });
          }
          setIsSuccess(true);
          setPopupMessage("Submission successful!");
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
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    //router.push("/results");
  };

  return (
    <div className="p-5 pb-12 m-0 overflow-hidden xl:px-5 ">
      <div className="flex   w-[100%] gap-6 p-5 my-12  justify-center items-center">
        <form
          className="grid min-w-[550px] grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="pb-5 text-2xl font-bold sm:col-span-2">
            <h1>Need To Know ...</h1>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Gender :</label> */}
            <Select
              id="1"
              size="lg"
              required={true}
              label="Gender"
              labelPlacement="outside"
              className="max-w-xs text-base font-medium"
              selectedKeys={new Set([formValues.gender])}
              onSelectionChange={(key) => handleSelectChange(key, "gender")}
              color="success"
              onClose={() => setTouchedGender(true)}
              errorMessage={
                formErrors.gender || (touchedGender && !formValues.gender)
                  ? "Please select a gender"
                  : ""
              }
              isInvalid={
                !!formErrors.gender || (touchedGender && !formValues.gender)
              }
            >
              <SelectItem key="male" value="male">
                Male
              </SelectItem>
              <SelectItem key="female" value="female">
                Female
              </SelectItem>
            </Select>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Age :</label> */}
            <Input
              id="2"
              labelPlacement="outside"
              size="lg"
              label="Age"
              type="number"
              name="age"
              required={true}
              className="max-w-xs text-base font-medium"
              value={formValues.age}
              onChange={handleInputChange}
              color="success"
              status={formErrors.age ? "error" : "default"}
              helperText={formErrors.age}
              errorMessage={formErrors.age ? "Please select a valid age" : ""}
              isInvalid={!!formErrors.age}
            />
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Hypertension :</label> */}
            <Select
              id="3"
              required={true}
              size="lg"
              label="Hypertension"
              labelPlacement="outside"
              className="max-w-xs text-base font-medium"
              selectedKeys={new Set([formValues.hypertension])}
              onSelectionChange={(key) =>
                handleSelectChange(key, "hypertension")
              }
              color="success"
              onClose={() => setTouchedHypertension(true)}
              errorMessage={
                formErrors.hypertension ||
                (touchedHypertension && !formValues.hypertension)
                  ? "Please select a status"
                  : ""
              }
              isInvalid={
                !!formErrors.hypertension ||
                (touchedHypertension && !formValues.hypertension)
              }
            >
              <SelectItem value={0}>No</SelectItem>
              <SelectItem value={1}>Yes</SelectItem>
            </Select>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Heart Disease :</label> */}
            <Select
              id="4"
              required={true}
              size="lg"
              label="Heart Disease"
              labelPlacement="outside"
              className="max-w-xs text-base font-medium"
              selectedKeys={new Set([formValues.heartDisease])}
              onSelectionChange={(key) =>
                handleSelectChange(key, "heartDisease")
              }
              color="success"
              onClose={() => setTouchedHeartDiseas(true)}
              errorMessage={
                formErrors.heartDisease ||
                (touchedHeartDisease && !formValues.heartDisease)
                  ? "Please select a status"
                  : ""
              }
              isInvalid={
                !!formErrors.heartDisease ||
                (touchedHeartDisease && !formValues.heartDisease)
              }
            >
              <SelectItem value="0">No</SelectItem>
              <SelectItem value="1">Yes</SelectItem>
            </Select>
            <div className="flex items-center mt-4">
              <input
                color="success"
                type="checkbox"
                id="bmiDirectCheckbox"
                checked={isBmiDirect}
                onChange={(e) => setIsBmiDirect(e.target.checked)}
                className="mr-2"
              />
              <label
                htmlFor="bmiDirectCheckbox"
                className="text-base font-medium text-green-600"
              >
                Enter BMI directly
              </label>
            </div>
          </div>
          {!isBmiDirect && (
            <>
              <div className="flex flex-col mb-4">
                <Input
                  id="5"
                  labelPlacement="outside"
                  size="lg"
                  label="Weight (kg)"
                  type="number"
                  name="weight"
                  className="max-w-xs text-base font-medium"
                  value={bmiValue.weight}
                  onChange={handleInputChange}
                  color="success"
                  status={formErrors.weight ? "error" : "default"}
                  helperText={formErrors.weight}
                  errorMessage={
                    formErrors.weight ? "Please input a valid weight" : ""
                  }
                  isInvalid={!!formErrors.weight}
                />
              </div>
              <div className="flex flex-col mb-4">
                <Input
                  id="6"
                  labelPlacement="outside"
                  size="lg"
                  label="Height (m)"
                  type="number"
                  name="height"
                  className="max-w-xs text-base font-medium"
                  value={bmiValue.height}
                  onChange={handleInputChange}
                  color="success"
                  status={formErrors.height ? "error" : "default"}
                  helperText={formErrors.height}
                  errorMessage={
                    formErrors.height ? "Please enter a valid height" : ""
                  }
                  isInvalid={!!formErrors.height}
                />
              </div>
            </>
          )}
          <div className="flex flex-col mb-4">
            <Input
              id="7"
              labelPlacement="outside"
              size="lg"
              label="BMI (kg/m²)"
              type="number"
              name="bmi"
              className="max-w-xs text-base font-medium"
              value={formValues.bmi}
              onChange={handleInputChange}
              color="success"
              status={formErrors.bmi ? "error" : "default"}
              helperText={formErrors.bmi}
              errorMessage={
                formErrors.bmi ? "Please enter a valid BMI value" : ""
              }
              isInvalid={!!formErrors.bmi}
              disabled={!isBmiDirect} // Enable BMI input when checkbox is ticked
            />
          </div>

          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Smoking history :</label> */}
            <Select
              id="8"
              required={true}
              size="lg"
              label="Smoking History "
              labelPlacement="outside"
              className="max-w-xs text-base font-medium"
              selectedKeys={new Set([formValues.smokingHistory])}
              onSelectionChange={(key) =>
                handleSelectChange(key, "smokingHistory")
              }
              color="success"
              onClose={() => setTouchedSmokingHistory(true)}
              errorMessage={
                formErrors.smokingHistory ||
                (touchedSmokingHistory && !formValues.smokingHistory)
                  ? "Please select your status"
                  : ""
              }
              isInvalid={
                !!formErrors.smokingHistory ||
                (touchedSmokingHistory && !formValues.smokingHistory)
              }
            >
              <SelectItem value="0">Current</SelectItem>
              <SelectItem value="1">Non-smoker</SelectItem>
              <SelectItem value="2">Past-smoker</SelectItem>
            </Select>
            {formErrors.smokingHistory && (
              <p className="mt-1 text-sm text-red-500">
                {formErrors.smokingHistory}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">HbA1c Level :</label> */}
            <Input
              id="9"
              required={true}
              labelPlacement="outside"
              size="lg"
              label="HbA1c Level (%)"
              type="number"
              name="hba1c"
              className="max-w-xs text-base font-medium"
              value={formValues.hba1c}
              onChange={handleInputChange}
              color="success"
              status={formErrors.hba1c ? "error" : "default"}
              helperText={formErrors.hba1c}
              errorMessage={
                formErrors.hba1c ? "Please enter a valid HbA1c value" : ""
              }
              isInvalid={!!formErrors.hba1c}
            />
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Blood Glucose Level :</label> */}
            <Input
              id="10"
              required={true}
              labelPlacement="outside"
              size="lg"
              label="Blood Glucose Level (mg/dL)"
              type="number"
              name="bloodGlucose"
              className="max-w-xs text-base font-medium"
              value={formValues.bloodGlucose}
              onChange={handleInputChange}
              color="success"
              status={formErrors.bloodGlucose ? "error" : "default"}
              helperText={formErrors.bloodGlucose}
              errorMessage={
                formErrors.bloodGlucose
                  ? "Please enter a valid blood Glucose Level"
                  : ""
              }
              isInvalid={!!formErrors.bloodGlucose}
            />
          </div>
          <div className="flex justify-center flex-grow mt-10 sm:col-span-2 ">
            <button
              type="submit"
              className="py-2 text-lg font-medium text-white bg-[#32CD82] border-none rounded-2xl cursor-pointer px-28 hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="hidden lg:block xl:pl-20">
          <Image alt="" src={faqImage} />
        </div>
      </div>

      {isPopupVisible && (
        <Popup
          message={popupMessage}
          isSuccess={isSuccess}
          onClose={closePopup}
        />
      )}
      <div ref={resultsRef}>
        {predictionResults && (
          <ResultsDisplay results={predictionResults} values={formValues} />
        )}
      </div>
    </div>
  );
};

export default Demo;
