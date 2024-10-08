import Link from "next/link";
import DarkMode from "./DarkMode";
export default function Navbar() {
  return (
    <nav className="sticky top-full md:top-1 flex items-center justify-center md:items-center md:justify-center md:w-1/2 md:mx-auto md:p-2 p-2 bg-neutral-300 dark:bg-neutral-800 rounded-3xl mb-2 mx-2">
      <Link href="/" className="dm-serif-text-regular text-xl md:text-3xl p-2 hover:bg-neutral-400 dark:hover:bg-neutral-900 rounded">
        MyTodosWeb
      </Link>
      <Link href="/" className="p-2 rounded hover:bg-neutral-400 dark:hover:bg-neutral-900">
        <h1 className="text-sm">Dashboard</h1>
      </Link>
      <Link href="/completed-tasks" className="p-2 rounded hover:bg-neutral-400 dark:hover:bg-neutral-900">
        <h1 className="text-sm">Completed</h1>
      </Link>
      <Link href="/remaining-tasks" className="p-2 rounded hover:bg-neutral-400 dark:hover:bg-neutral-900">
        <h1 className="text-sm">Remaining</h1>
      </Link>
      <Link href="/create-task" className="p-2 rounded hover:bg-neutral-400 dark:hover:bg-neutral-900">
        <h1 className="text-sm">Create</h1>
      </Link>
      <DarkMode />
    </nav>
  );
}
