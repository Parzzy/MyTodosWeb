import { connectToDatabase } from "@/lib/mongodb";
import Task from "@/models/task";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();
    const task = await Task.findById(id);

    if (!task) {
      return new Response("Task not found", { status: 404 });
    }

    return new Response(JSON.stringify(task), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    });
  } catch (error) {
    return new Response("Error fetching task", {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, tasks } = await req.json();

  try {
    await connectToDatabase();

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, tasks },
      { new: true }
    );

    if (!updatedTask) {
      return new Response("Task not found", { status: 404 });
    }

    return new Response(JSON.stringify(updatedTask), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    });
  } catch (error) {
    return new Response("Error updating task", {
      status: 500,
    });
  }
}
