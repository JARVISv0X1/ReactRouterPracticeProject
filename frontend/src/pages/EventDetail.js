import { Link, useParams } from "react-router-dom";
import { eventList } from "../eventList";
import { useEffect, useState } from "react";
export default function EventDetailPage() {
  const parms = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  useEffect(() => {
    setEventDetails(
      eventList.filter((data) => {
        return data.id === parms.id;
      })
    );
  }, [eventDetails, parms.id]);

  return (
    <>
      {eventDetails.map((data) => {
        return (
          <>
            <h1>EventDetailPage</h1>
            <h4>EventId: {data.id}</h4>
            <h2>Event Title: {data.title}</h2>
            <p>Event Description: {data.description}</p>
            <Link to={`/events/${data.id}/edit`}>Edit Event</Link>
          </>
        );
      })}
    </>
  );
}
