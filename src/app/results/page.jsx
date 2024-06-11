"use client"

import React, { useEffect, useState } from 'react';
import styles from './results.module.css';

const ResultsPage = () => {
  const [predictionResults, setPredictionResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/submit-form');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPredictionResults(data.predictionResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prediction results:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Diabetes Prediction Results</h1>
      {predictionResults ? (
        <div>
          <p><strong>Diabetes Prediction:</strong> {predictionResults.diabetesPrediction}</p>
          <p><strong>Confidence Score:</strong> {predictionResults.confidenceScore}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No prediction results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;
