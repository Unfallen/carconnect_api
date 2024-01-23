import React from "react";
import './App.css';
import CustomerForm from "./landing/CustomerForm";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Customer Form</h1>
          <CustomerForm />
        </header>
      </div>
  );
}

export default App;
