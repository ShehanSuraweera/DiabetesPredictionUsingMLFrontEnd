import styles from "./how-it-work.module.css";

const howItWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h1 className={styles.top_title}>Workflow Diagram</h1>

        <h2 className={styles.title_04}>Workflow Overview:</h2>

        <p className={styles.topPara}>
          Data Collection <br />
          Data Preprocessing <br />
          Model Training <br />
          Prediction Result Interpretation
        </p>
      </div>

      <div className={styles.secondContainer}>
        <h1 className={styles.top_title}>Steps Involved</h1>

        <h2 className={styles.title_03}>1. Data Collection:</h2>

        <p className={styles.desc_01}>
          The first step in our workflow is data collection. We gather a variety
          of data points from different sources to build a comprehensive dataset
          for training our machine learning model. The types of data used
          include:
        </p>

        <h2 className={styles.title_03}>2. Data Preprocessing:</h2>

        <h3 className={styles.title_04}>
          Once the data is collected, it undergoes preprocessing to ensure it is
          clean, consistent, and suitable for training the machine learning
          model. The preprocessing steps include:
        </h3>

        <p className={styles.desc_01}>
        <b>Data Cleaning:</b> Removing or correcting inaccurate, incomplete, or
          irrelevant data entries. This may involve handling missing values and
          eliminating duplicates.
          <br /> <b>Normalization:</b> Scaling the data to ensure that all features
          contribute equally to the model training. This typically involves
          normalizing numeric values to a standard range.
          <br /> <b>Feature Engineering:</b> Creating new features from existing data
          to enhance the model's predictive power. For example, calculating the
          ratio of certain health metrics.
          <br /> <b>Data Splitting:</b> Dividing the dataset into training, validation,
          and test sets to evaluate the model's performance accurately.
        </p>

        <h2 className={styles.title_03}>3. Model Training:</h2>

        <h3 className={styles.title_04}>
          In this step, we use the preprocessed data to train our machine
          learning model. The process involves:
        </h3>

        <p className={styles.desc_01}>
        <b>Algorithm Selection:</b> Choosing an appropriate machine learning
          algorithm suitable for the task. Common choices include decision
          trees, random forests, support vector machines, and neural networks.
          <br />
          <b>Training the Model:</b> Feeding the training data into the algorithm to
          learn patterns and relationships between the input features and the
          target variable (diabetes status).
          <br /> <b>Hyperparameter Tuning:</b> Adjusting the model's parameters to
          optimize its performance. This is often done using techniques like
          cross-validation and grid search.
          <br /> <b>Model Evaluation:</b> Assessing the model's performance using the
          validation set. Metrics such as accuracy, precision, recall, and
          F1-score are used to evaluate the results.
        </p>

        <h2 className={styles.title_03}>4. Prediction</h2>

        <h3 className={styles.title_04}>
          Once the model is trained and validated, it is ready to make
          predictions. In this stage:
        </h3>

        <p className={styles.desc_01}>
          <b>User Input:</b> Users provide their health data through an
          intuitive web interface. The input data typically includes recent
          health metrics and lifestyle information.
          <br /> <b>Data Processing:</b> The input data is preprocessed in real-time,
          applying the same normalization and feature engineering techniques
          used during model training.
          <br /> <b>Model Inference:</b> The preprocessed data is fed into the trained
          model to generate a prediction. The model outputs a probability score
          indicating the risk of diabetes.
        </p>

        <h2 className={styles.title_03}>5. Result Interpretation:</h2>

        <p className={styles.desc_01}>
          The final step involves interpreting the prediction results and
          providing actionable insights to the users. This includes:
        </p>
      </div>
    </div>
  );
};

export default howItWork;
