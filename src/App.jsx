import React from "react";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1 className="text-center text-5xl mt-4 mb-4 font-semibold text-gray-500">
        Task Tracker
      </h1>
      <AddTask />
    </div>
  );
}

export default App;
