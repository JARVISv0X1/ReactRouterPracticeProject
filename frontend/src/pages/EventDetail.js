import {
  Link,
  json,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
// import { eventList } from "../eventList";
// import { useEffect, useState } from "react";
// import classes from "./PageContent.module.css";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("eventData");
  const eventData = data.event;
  // const parms = useParams();
  // const [eventDetails, setEventDetails] = useState([]);
  // useEffect(() => {
  //   setEventDetails(
  //     eventList.filter((data) => {
  //       return data.id === parms.id;
  //     })
  //   );
  // }, [eventDetails, parms.id]);

  return (
    <>
      <EventItem event={eventData} />
      {/* <div className={classes.content}>
        <h1>EventDetailPage</h1>
        <h4>EventId: {eventData.id}</h4>
        <h2>Event Title: {eventData.title}</h2>
        <p>Event Description: {eventData.description}</p>
        <div>
          <img src={eventData.image} alt={eventData.title} width="20%" />
        </div>
        <Link to={`/events/${eventData.id}/edit`}>Edit Event</Link>
      </div> */}
    </>
  );
}
export default EventDetailPage;
export async function eventPageDetailLoader({ request, params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:5005/events/${id}`);
  if (!response.ok) {
    throw json(
      { title: "Something went Wrong" },
      { message: "Could not fetch Events data" },
      {
        status: 500,
      }
    );
  } else {
    // const resData = response.json();
    // console.log(resData);
    return response;
  }
}
