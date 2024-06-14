"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Popup from "../../components/popup/Popup";
import { Select, SelectItem, Input } from "@nextui-org/react";
import faqImage from "@/images/demo/demo.svg";
import Image from "next/image";

const Demo = () => {
  const router = useRouter();

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
  const [touchedGender, setTouchedGender] = useState(false);
  const [touchedHypertension, setTouchedHypertension] = useState(false);
  const [touchedHeartDisease, setTouchedHeartDiseas] = useState(false);
  const [touchedSmokingHistory, setTouchedSmokingHistory] = useState(false);

  const handleSelectChange = (key, name) => {
    const value = key.anchorKey;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value > 0) {
      setFormValues({ ...formValues, [name]: value });
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
    <div className="p-5 pb-12 m-0 overflow-hidden xl:px-36 ">
      <div className="flex   w-[100%] gap-6 p-5 my-12  justify-center items-center">
        <form
          className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="pb-5 text-2xl font-bold sm:col-span-2">
            <h1>Need To Know ...</h1>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Gender :</label> */}
            <Select
              size="lg"
              required="true"
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
              <SelectItem key="1">Male</SelectItem>
              <SelectItem key="2">Female</SelectItem>
            </Select>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Age :</label> */}
            <Input
              labelPlacement="outside"
              size="lg"
              label="Age"
              type="number"
              name="age"
              required="true"
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
              required="true"
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
              <SelectItem value="0">No</SelectItem>
              <SelectItem value="1">Yes</SelectItem>
            </Select>
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Heart Disease :</label> */}
            <Select
              required="true"
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
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">Smoking history :</label> */}
            <Select
              required="true"
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
            {/* <label className="mb-1 font-bold">BMI :</label> */}
            <Input
              required="true"
              labelPlacement="outside"
              size="lg"
              label="BMI"
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
            />
          </div>
          <div className="flex flex-col mb-4">
            {/* <label className="mb-1 font-bold">HbA1c Level :</label> */}
            <Input
              required="true"
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
              required="true"
              labelPlacement="outside"
              size="lg"
              label="Blood Glucose Level"
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
    </div>
  );
};

export default Demo;
