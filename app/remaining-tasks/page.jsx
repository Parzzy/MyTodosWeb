import { Suspense } from "react"
import RemainingTaskList from "../components/RemainingTaskList"
import Loading from "../loading"
export default function RemainingTasksPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <RemainingTaskList />
      </Suspense>
    </main>
  )
}
