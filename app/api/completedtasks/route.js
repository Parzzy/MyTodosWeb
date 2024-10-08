import { connectToDatabase } from '@/lib/mongodb';
import Task from '@/models/task';

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Find tasks where all subtasks are completed
    const completedTasks = await Task.find({
      tasks: { $not: { $elemMatch: { completed: false } } }
    });

    return new Response(JSON.stringify(completedTasks), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error fetching completed tasks', {
      status: 500,
    });
  }
}
