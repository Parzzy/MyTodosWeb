"use client";
import EditForm from "../../components/EditForm";
import { useParams } from "next/navigation";
export default function page() {
  return (
    <main>
      <EditForm params={useParams()}/>
    </main>
  )
}
