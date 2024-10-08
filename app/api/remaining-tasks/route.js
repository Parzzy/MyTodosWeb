import { connectToDatabase } from "@/lib/mongodb";
import Task from "@/models/task";

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Find tasks where all subtasks are not completed
    const remainingTasks = await Task.find({
      tasks: { $elemMatch: { completed: false } },
    });

    // Return the remaining tasks
    return new Response(JSON.stringify(remainingTasks), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    });
  } catch (error) {
    return new Response("Failed to fetch tasks", { status: 500 });
  }
}
