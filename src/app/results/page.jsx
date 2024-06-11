"use client";

import React, { useEffect, useState } from "react";

const ResultsPage = () => {
  const [predictionResults, setPredictionResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/submit-form");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPredictionResults(data.predictionResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prediction results:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Diabetes Prediction Results</h1>
      {predictionResults ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            <strong>Diabetes Prediction:</strong>{" "}
            {predictionResults.diabetesPrediction}
          </p>
          <p className="text-lg">
            <strong>Confidence Score:</strong>{" "}
            {predictionResults.confidenceScore}
          </p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p className="text-lg">No prediction results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;
