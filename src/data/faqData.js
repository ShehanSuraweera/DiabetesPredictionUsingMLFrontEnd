const faqData = [
  {
    question: "What is diabetes?",
    answer: `
      <p>Diabetes is a chronic condition that affects the body's ability to regulate blood sugar levels due to issues with insulin production or utilization.</p>
      <p>There are three main types:</p>
      <ul>
        <li>Type 1, where the body cannot produce insulin</li>
        <li>Type 2, where the body becomes resistant to insulin or doesn't produce enough</li>
        <li>Gestational diabetes, which occurs during pregnancy</li>
      </ul>
      <p>Some symptoms are:</p>
      <ul>
        <li>Increased thirst</li>
        <li>Frequent urination</li>
        <li>Fatigue</li>
        <li>Blurred vision</li>
        <li>Unexplained weight loss</li>
        <li>Slow-healing wounds</li>
      </ul>
      <p>Early detection is crucial to prevent complications.</p>
    `,
  },
  {
    question: "How does your detection system work?",
    answer: `
      <p>Our diabetes detection system utilizes the Random Forest machine learning model to predict your risk of developing diabetes. Here’s a step-by-step explanation of how it works:</p>
      <p>Data Collection: We collect important health information from you, such as your age, gender, blood glucose levels, Body Mass Index (BMI), smoking history, HbA1c level (%) and medical history, including any conditions like hypertension or heart disease.</p>
      <p>Data Preprocessing: The information you provide is carefully processed to ensure it's complete and standardized, making it ready for analysis.</p>
      <p>Feature Selection: We identify and focus on the most important factors that influence diabetes risk to enhance prediction accuracy.</p>
      <p>Model Training with Random Forest: We exclusively use the Random Forest model for training. This model works by creating multiple decision trees during training and merging them to get a more accurate and stable prediction.</p>
      <p>Model Evaluation: The Random Forest model is evaluated for its accuracy, precision, and reliability to ensure it performs well in predicting diabetes.</p>
      <p>Prediction: When you input your data, the system analyzes it using the Random Forest model to predict your risk of developing diabetes. You'll receive a clear result indicating whether you are at risk.</p>
      <p>Risk Categorization: In addition to predicting diabetes, our system categorizes your risk level (e.g., low risk, high risk). This helps in planning early interventions and personalized treatment strategies.</p>
      <p>User-Friendly Interface: Our platform is designed to be easy to use. You simply enter your data and receive real-time predictions and risk assessments quickly and easily.</p>
    `,
  },
  {
    question: "How accurate is the model?",
    answer: `
      <p>Our diabetes detection system is very accurate. It uses the Random Forest model, which correctly predicts diabetes in about 96 out of 100 cases. This means it is reliable and trustworthy for assessing your risk of diabetes. The model is designed to be precise and consistent, giving you dependable results to help manage and prevent diabetes effectively.</p>
    `,
  },
  {
    question: "Is my data secure?",
    answer: `
      <p>Yes, your data is secure. We use strong encryption to protect your data during transmission and storage. Our servers are secure, and only authorized personnel can access your information. We also follow all privacy regulations and conduct regular security checks to keep your data safe.</p>
    `,
  },
];

export default faqData;
