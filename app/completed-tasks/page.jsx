import CompletedTaskList from "../components/CompletedTaskList";
import { Suspense } from "react";
import Loading from "../loading";
export default function CompletedTasks() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <CompletedTaskList />
      </Suspense>
    </main>
  );
}
