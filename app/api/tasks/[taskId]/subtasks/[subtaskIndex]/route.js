import { connectToDatabase } from "@/lib/mongodb";
import Task from "@/models/task";

// Update subtask status
export async function PUT(req, { params }) {
  const { taskId, subtaskIndex } = params;
  const { completed } = await req.json();
  await connectToDatabase();

  const task = await Task.findById(taskId);
  if (!task) {
    return new Response("Task not found", { status: 404 });
  }

  task.tasks[subtaskIndex].completed = completed;
  await task.save();

  return new Response(JSON.stringify(task), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
}
