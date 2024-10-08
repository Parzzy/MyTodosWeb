import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "MyTodos",
  description: "Create and manage tasks with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased pb-20 md:pb-0 min-h-screen max-w-screen bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 text-neutral-700 dark:text-neutral-200`}
      >
        <div className="fixed bottom-0 left-0 right-0 w-full mb-2 pl-2 pr-2 md:sticky md:top-1">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
