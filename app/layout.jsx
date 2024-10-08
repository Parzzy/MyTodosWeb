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
        className={`${roboto.className} antialiased min-h-screen bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 text-neutral-700 dark:text-neutral-200`}
      >
        <Navbar />
        <div className="absolute top-1 left-0 right-0 md:relative">{children}</div>
      </body>
    </html>
  );
}
