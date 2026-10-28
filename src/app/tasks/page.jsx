import React from "react";
import { getTasks } from "../../lib/tasks";
import Taskcard from "@/components/Taskcard";
import { AddTask } from "@/components/AddTask";
import { createTask } from "@/lib/actions";
import Link from "next/link";
import { Button } from "@heroui/react";

async function TaskPage() {
    const tasks = await getTasks();

  return (
    <div>
      <h2>Task:{tasks.length}</h2>
      <AddTask createTask={createTask}></AddTask>
      <Link href="/tasks/new">
      <Button variant ='solid'>
        Add Task
      </Button></Link>

     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {
        tasks.map(task => <Taskcard key={task.id} task={task} />)
    }

     </div>

    </div>
  );
}

export default TaskPage;
