import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:5005/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
    // return { isError: true, message: "Could not fetch events." };
    throw { message: "Could not fetch events" };
  } else {
    const resData = await response.json();
    // setFetchedEvents(resData.events);
    return resData;
  }
}
