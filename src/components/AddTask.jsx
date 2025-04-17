import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

function AddTask() {
  const [task, setTask] = useState("");
  const [frequency, setFrequency] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    if (task === "" && frequency === "") {
      toast.error("Please fill the given fields")
      return;
    }
     if(task === "") {
      toast.error("Please enter a task ")
      return;
    }
    if(frequency === "") {
      toast.error("Please select frequency")
      return;
    }
      
   

    const newTask = { task, frequency };
    const UpdatedTask = [ ...tasks, newTask ];
    setTasks(UpdatedTask);
    setTask("");
    setFrequency("");
  };

  return (
    <div className="justify-center flex flex-col ">
      <input
        type="text"
        value={task}
        placeholder="Enter task here"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className="w-1/2 mx-auto border border-gray-300 py-2 mb-4 outline-none rounded-md shadow-md px-4 block font-semibold"
      />
      <select
        value={frequency}
        onChange={(e) => {
          setFrequency(e.target.value);
        }}
        className="w-1/2 mx-auto border border-gray-300 py-2 outline-none rounded-md shadow-md mb-4 px-4 text-gray-400 font-semibold"
      >
        <option value="" className="w-1/2 ">
          Select Frequency
        </option>
        <option value="Daily" className="w-1/2">
          Daily
        </option>
        <option value="Weekly" className="w-1/2">
          Weekly
        </option>
        <option value="Monthly" className="w-1/2">
          Monthly
        </option>
      </select>
      <button
        className="w-1/6 mx-auto bg-blue-500 rounded-md shadow-md text-white py-2 hover:bg-blue-600"
        onClick={addTasks}
      >
        Add Task
      </button>
      {tasks.map((obj, i)=>(
        <div key={i} className="justify-center flex">
          <h1 className="text-3xl bg-gray-200 py-4 px-4 w-[1300px] mt-4 rounded-md shadow-md">{obj.task}<span className="text-sm">{obj.frequency}</span></h1>
         
        </div>
      ))}
      <Toaster />
    </div>
  );
}

export default AddTask;
