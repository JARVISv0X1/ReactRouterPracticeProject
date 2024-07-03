import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("eventData");
  const formData = data.event;
  console.log(formData);
  return (
    <>
      <EventForm event={formData} />
    </>
  );
}
