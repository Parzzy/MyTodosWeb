import TaskList from "./components/TaskList";
import Loading from "./loading";
import { Suspense } from "react";
export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <TaskList />
      </Suspense>
    </main>
  );
}
