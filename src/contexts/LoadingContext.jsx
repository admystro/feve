// src/contexts/LoadingContext.js
import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); 
  const [loadingText, setLoadingText] = useState("Завантаження...");
  const [progress, setProgress] = useState(0);

  const startLoading = (text = "Завантаження...") => {
    setLoadingText(text);
    setProgress(0);
    setIsLoading(true);
  };

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const stopLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingText,
        progress,
        startLoading,
        updateProgress,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};