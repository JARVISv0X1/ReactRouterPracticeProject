import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { toast } from "react-toastify";

export default function EditEventPage() {
  const data = useRouteLoaderData("eventData");
  const formData = data.event;
  // console.log(formData);
  return (
    <>
      <EventForm event={formData} />
    </>
  );
}

export async function action({ request, params }) {
  // console.log("inside edit event action");
  const data = await request.formData();
  const eventId = params.id;
  // console.log(`id= ${eventId}`);
  const updatedEventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch(`http://localhost:5005/events/${eventId}`, {
    method: "PATCH",
    body: JSON.stringify(updatedEventData),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorData = await response.json();
    toast.error(errorData.message);
    throw json({ message: "Error while editing Event" }, { status: 500 });
  }
  const responseData = await response.json();
  toast.success(responseData.message);
  return redirect(`/events/${eventId}`);
}
