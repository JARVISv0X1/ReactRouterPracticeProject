import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:5005/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
  } else {
    const resData = await response.json();
    // setFetchedEvents(resData.events);
    return resData.events;
  }
}
