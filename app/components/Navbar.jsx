import Link from "next/link";
import DarkMode from "./DarkMode";
export default function Navbar() {
  return (
    <nav className="gap-3 md:gap-6 flex items-center justify-center md:items-center md:justify-center w-full p-3 md:w-1/2 md:mx-auto bg-neutral-200 dark:bg-neutral-900 rounded-3xl">
      <Link
        href="/"
        className="dm-serif-text-regular md:p-2 text-xl md:text-3xl hover:bg-neutral-400 dark:hover:bg-neutral-900 rounded"
      >
        MyTodos
      </Link>
      <Link
        href="/completed-tasks"
        className="rounded md:p-2 hover:bg-neutral-400 dark:hover:bg-neutral-900"
      >
        <h1 className="text-xs md:text-lg">Completed</h1>
      </Link>
      <Link
        href="/remaining-tasks"
        className="rounded md:p-2 hover:bg-neutral-400 dark:hover:bg-neutral-900"
      >
        <h1 className="text-xs md:text-lg">Remaining</h1>
      </Link>
      <Link
        href="/create-task"
        className="rounded md:p-2 hover:bg-neutral-400 dark:hover:bg-neutral-900"
      >
        <h1 className="text-xs md:text-lg">Create</h1>
      </Link>
      <DarkMode />
    </nav>
  );
}
