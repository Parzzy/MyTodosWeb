"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const router = useRouter();
  // State to hold the title and the tasks array
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([{ description: "" }]);

  // Handler to add a new task input
  const addTaskInput = (e) => {
    e.preventDefault();
    setTasks([...tasks, { description: "" }]); // Add a new task to the array
  };

  // Handler to update task description
  const handleTaskChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index].description = value;
    setTasks(newTasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new task object
    const newTask = {
      title,
      tasks,
    };

    // Send the new task object to the server
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col gap-4 mx-2 md:w-1/2 md:mx-auto">
      <h1 className="dm-serif-text-regular text-3xl mx-auto">Create Task</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-start items-start bg-neutral-300 dark:bg-neutral-700 p-4 rounded"
      >
        {/* Title Input */}
        <label>Title:</label>
        <input
          type="text"
          placeholder="Task Title"
          className="w-full bg-neutral-400 dark:bg-neutral-800 p-1 rounded placeholder:text-neutral-200 dark:placeholder:text-neutral-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Task Description Inputs */}
        <label>Description:</label>
        {tasks.map((task, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Task Description ${index + 1}`}
            className="w-full bg-neutral-400 dark:bg-neutral-800 p-1 rounded placeholder:text-neutral-200 dark:placeholder:text-neutral-600"
            value={task.description}
            onChange={(e) => handleTaskChange(index, e.target.value)}
          />
        ))}

        {/* Add Task Button */}
        <button onClick={addTaskInput}>+</button>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
