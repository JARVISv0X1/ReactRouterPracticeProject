import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return (
    <>
      <EventForm />
    </>
  );
}

export async function action({ request, param }) {
  const newEventData = await request.formData();

  const eventData = {
    title: newEventData.get("title"),
    image: newEventData.get("image"),
    description: newEventData.get("description"),
    date: newEventData.get("date"),
  };

  const response = await fetch("http://localhost:5005/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw json({ message: "Error while adding data" }, { status: 500 });
  }
  return redirect("/events");
}
