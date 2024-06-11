"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import styles from "./demo.module.css";
import Popup from "../../components/popup/Popup";
import ResultsPage from '../results/page';


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
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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
            router.push('/results');
          }, 2000);
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
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
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Need To Know ...</h1>
        <form
          action=""
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Gender :</label>
            <select
              className={styles.formInputs}
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
            >
              <option className={styles.selectionOption} value="male">
                Male
              </option>
              <option className={styles.selectionOption} value="female">
                Female
              </option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Age :</label>
            <input
              className={`${styles.formInputs} ${
                formErrors.age ? styles.errorInput : ""
              }`}
              type="number"
              name="age"
              value={formValues.age}
              onChange={handleInputChange}
            />
            {formErrors.age && (
              <p className={styles.errorText}>{formErrors.age}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Hypertension :</label>
            <select
              className={styles.formInputs}
              name="hypertension"
              value={formValues.hypertension}
              onChange={handleInputChange}
            >
              <option className={styles.selectionOption} value="0">
                No
              </option>
              <option className={styles.selectionOption} value="1">
                Yes
              </option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Heart Disease :</label>
            <input
              className={`${styles.formInputs} ${
                formErrors.heartDisease ? styles.errorInput : ""
              }`}
              type="number"
              name="heartDisease"
              value={formValues.heartDisease}
              onChange={handleInputChange}
            />
            {formErrors.heartDisease && (
              <p className={styles.errorText}>{formErrors.heartDisease}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Smoking history :</label>
            <select
              className={styles.formInputs}
              name="smokingHistory"
              value={formValues.smokingHistory}
              onChange={handleInputChange}
            >
              <option className={styles.selectionOption} value="0">
                Current
              </option>
              <option className={styles.selectionOption} value="1">
                Never
              </option>
              <option className={styles.selectionOption} value="2">
                Former
              </option>
            </select>
            {formErrors.smokingHistory && (
              <p className={styles.errorText}>{formErrors.smokingHistory}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>BMI :</label>
            <input
              className={`${styles.formInputs} ${
                formErrors.bmi ? styles.errorInput : ""
              }`}
              type="number"
              name="bmi"
              value={formValues.bmi}
              onChange={handleInputChange}
            />
            {formErrors.bmi && (
              <p className={styles.errorText}>{formErrors.bmi}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>HbA1c Level :</label>
            <input
              className={`${styles.formInputs} ${
                formErrors.hba1c ? styles.errorInput : ""
              }`}
              type="number"
              name="hba1c"
              value={formValues.hba1c}
              onChange={handleInputChange}
            />
            {formErrors.hba1c && (
              <p className={styles.errorText}>{formErrors.hba1c}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Blood Glucose Level :</label>
            <input
              className={`${styles.formInputs} ${
                formErrors.bloodGlucose ? styles.errorInput : ""
              }`}
              type="number"
              name="bloodGlucose"
              value={formValues.bloodGlucose}
              onChange={handleInputChange}
            />
            {formErrors.bloodGlucose && (
              <p className={styles.errorText}>{formErrors.bloodGlucose}</p>
            )}
          </div>
          <div className={styles.submitColumn}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className={styles.secondContainer}></div>
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
