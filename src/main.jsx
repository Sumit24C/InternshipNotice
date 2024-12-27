
import React from 'react'; // Import React explicitly
import ReactDOM from 'react-dom/client'; // Or from 'react-dom' if not using React 18
import App from './App'; // Ensure your App component is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
