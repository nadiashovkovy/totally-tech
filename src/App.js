import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [issues, setIssues] = useState([]); // List of newsletter issues
  const [currentIssueIndex, setCurrentIssueIndex] = useState(0); // Current issue index

  // Fetch issues from the backend on component mount
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/issues");
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);

  // Handle back arrow click
  const handleBackClick = () => {
    if (currentIssueIndex > 0) {
      setCurrentIssueIndex(currentIssueIndex - 1);
    }
  };

  // Handle forward arrow click
  const handleForwardClick = () => {
    if (currentIssueIndex < issues.length - 1) {
      setCurrentIssueIndex(currentIssueIndex + 1);
    }
  };

  return (
    <div className="app-container">
      <h1>Tech Newsletter</h1>
      {issues.length > 0 ? (
        <div className="newsletter-viewer">
          <button onClick={handleBackClick} disabled={currentIssueIndex === 0}>
            ◀️
          </button>
          <img
            src={issues[currentIssueIndex]?.image}
            alt={`Newsletter Issue ${currentIssueIndex + 1}`}
          />
          <button
            onClick={handleForwardClick}
            disabled={currentIssueIndex === issues.length - 1}
          >
            ▶️
          </button>
        </div>
      ) : (
        <p>Loading issues...</p>
      )}
    </div>
  );
};

export default App;
