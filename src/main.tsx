
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("app");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error("Element with id 'app' not found");
  }
});
