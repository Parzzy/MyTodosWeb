import mongoose from 'mongoose';

const SubTaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [SubTaskSchema],  // Array of sub-tasks
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);