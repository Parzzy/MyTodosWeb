"use client";
import { useEffect, useState } from "react";
export default function CompletedTaskList() {
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const res = await fetch("/api/completedtasks");
        const data = await res.json();
        setCompletedTasks(data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };
    fetchCompletedTasks();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = async (taskId, subtaskIndex) => {
    const updatedTasks = [...completedTasks];
    const subtask = updatedTasks.find((task) => task._id === taskId).tasks[
      subtaskIndex
    ];

    subtask.completed = !subtask.completed;

    // Update the state to reflect the change
    setCompletedTasks(updatedTasks);

    // Send the updated status to the server
    try {
      await fetch(`/api/tasks/${taskId}/subtasks/${subtaskIndex}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: subtask.completed }),
      });
    } catch (error) {
      console.error("Error updating subtask status:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="dm-serif-text-regular text-3xl font-bold mb-4 ">
          Completed Tasks
        </h1>
      </div>
      {completedTasks.map((task) => (
        <div
          key={task._id}
          className=" bg-neutral-300 dark:bg-neutral-800 rounded-3xl mb-2 mx-2 md:w-1/2 md:mx-auto"
        >
          <div className="flex flex-col p-5 gap-4">
            <h3 className="dm-serif-text-regular text-3xl">{task.title}</h3>
            <ul className="flex flex-col gap-3">
              {task.tasks.map((subtask, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-5 h-5 cursor-pointer accent-neutral-400 dark:accent-neutral-900 accent-opacity-60"
                    checked={subtask.completed}
                    onChange={() => handleCheckboxChange(task._id, index)}
                  />
                  {subtask.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
