"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditTaskPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (id) {
      // Fetch the task data when the component mounts
      const fetchTask = async () => {
        try {
          const response = await fetch(`/api/tasks/editTask/${id}`);
          const data = await response.json();
          setTask(data);
          setTitle(data.title);
          setTasks(data.tasks);
        } catch (error) {
          console.error("Error fetching task:", error);
        }
      };

      fetchTask();
    }
  }, [id]);

  const handleUpdateTask = async () => {
    const updatedTask = { title, tasks };

    try {
      const response = await fetch(`/api/tasks/editTask/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        router.push("/"); // Redirect back to the main page after successful update
      } else {
        console.error("Error updating task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleSubtaskChange = (index, value) => {
    const updatedtasks = [...tasks];
    updatedtasks[index].description = value;
    setTasks(updatedtasks);
  };

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-4 mx-2 md:w-1/2 md:mx-auto">
      <h1 className="dm-serif-text-regular text-3xl mx-auto">Edit Task</h1>
      <form className="flex flex-col gap-4 justify-start items-start bg-neutral-300 dark:bg-neutral-700 p-4 rounded">
        <label className="dm-serif-text-regular text-3xl">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-neutral-400 dark:bg-neutral-800 p-1 rounded placeholder:text-neutral-200 dark:placeholder:text-neutral-600"
          placeholder="Edit task title"
        />
        {tasks.map((subtask, index) => (
          <div key={index} className="flex flex-col mt-2 w-full gap-4">
            <label>Subtask {index + 1}:</label>
            <input
              type="text"
              value={subtask.description}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
              className="bg-neutral-400 dark:bg-neutral-800 p-1 rounded placeholder:text-neutral-200 dark:placeholder:text-neutral-600"
              placeholder="Edit subtask"
            />
          </div>
        ))}
        <button
          onClick={handleUpdateTask}
          className="mt-4 p-2 font-bold rounded mx-auto"
        >
          Save
        </button>
      </form>
    </div>
  );
}
