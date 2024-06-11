const HowItWork = () => {
  return (
    <div className="m-0 p-0 md:px-36 py-12 overflow-hidden">
      <div className="my-36 flex flex-col gap-12">
        <h1 className="text-3xl font-bold mb-4">Workflow Diagram</h1>
        <h2 className="text-2xl font-semibold">Workflow Overview:</h2>
        <p className="pl-5">
          Data Collection <br />
          Data Preprocessing <br />
          Model Training <br />
          Prediction Result Interpretation
        </p>
      </div>

      <div className="my-36 flex flex-col gap-12">
        <h1 className="text-3xl font-bold mb-4">Steps Involved</h1>

        <h2 className="text-2xl font-semibold">1. Data Collection:</h2>
        <p className="w-10/12 mb-12 text-base leading-8 tracking-wide">
          The first step in our workflow is data collection. We gather a variety
          of data points from different sources to build a comprehensive dataset
          for training our machine learning model. The types of data used
          include:
        </p>

        <h2 className="text-2xl font-semibold">2. Data Preprocessing:</h2>
        <h3 className="text-xl font-medium w-4/5">
          Once the data is collected, it undergoes preprocessing to ensure it is
          clean, consistent, and suitable for training the machine learning
          model. The preprocessing steps include:
        </h3>
        <p className="w-10/12 mb-12 text-base leading-8 tracking-wide">
          <b>Data Cleaning:</b> Removing or correcting inaccurate, incomplete,
          or irrelevant data entries. This may involve handling missing values
          and eliminating duplicates.
          <br /> <b>Normalization:</b> Scaling the data to ensure that all
          features contribute equally to the model training. This typically
          involves normalizing numeric values to a standard range.
          <br /> <b>Feature Engineering:</b> Creating new features from existing
          data to enhance the model's predictive power. For example, calculating
          the ratio of certain health metrics.
          <br /> <b>Data Splitting:</b> Dividing the dataset into training,
          validation, and test sets to evaluate the model's performance
          accurately.
        </p>

        <h2 className="text-2xl font-semibold">3. Model Training:</h2>
        <h3 className="text-xl font-medium w-4/5">
          In this step, we use the preprocessed data to train our machine
          learning model. The process involves:
        </h3>
        <p className="w-10/12 mb-12 text-base leading-8 tracking-wide">
          <b>Algorithm Selection:</b> Choosing an appropriate machine learning
          algorithm suitable for the task. Common choices include decision
          trees, random forests, support vector machines, and neural networks.
          <br />
          <b>Training the Model:</b> Feeding the training data into the
          algorithm to learn patterns and relationships between the input
          features and the target variable (diabetes status).
          <br /> <b>Hyperparameter Tuning:</b> Adjusting the model's parameters
          to optimize its performance. This is often done using techniques like
          cross-validation and grid search.
          <br /> <b>Model Evaluation:</b> Assessing the model's performance
          using the validation set. Metrics such as accuracy, precision, recall,
          and F1-score are used to evaluate the results.
        </p>

        <h2 className="text-2xl font-semibold">4. Prediction</h2>
        <h3 className="text-xl font-medium w-4/5">
          Once the model is trained and validated, it is ready to make
          predictions. In this stage:
        </h3>
        <p className="w-10/12 mb-12 text-base leading-8 tracking-wide">
          <b>User Input:</b> Users provide their health data through an
          intuitive web interface. The input data typically includes recent
          health metrics and lifestyle information.
          <br /> <b>Data Processing:</b> The input data is preprocessed in
          real-time, applying the same normalization and feature engineering
          techniques used during model training.
          <br /> <b>Model Inference:</b> The preprocessed data is fed into the
          trained model to generate a prediction. The model outputs a
          probability score indicating the risk of diabetes.
        </p>

        <h2 className="text-2xl font-semibold">5. Result Interpretation:</h2>
        <p className="w-10/12 mb-12 text-base leading-8 tracking-wide">
          The final step involves interpreting the prediction results and
          providing actionable insights to the users. This includes:
        </p>
      </div>
    </div>
  );
};

export default HowItWork;
