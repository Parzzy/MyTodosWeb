import { connectToDatabase } from '@/lib/mongodb';
import Task from '@/models/task';

export async function POST(req) {
  const { title, tasks } = await req.json();
  
  try {
    await connectToDatabase();
    const newTask = new Task({ title, tasks });
    await newTask.save();
    
    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new Response('Failed to create task', { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const tasks = await Task.find({});
    
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch tasks', { status: 500 });
  }
}
