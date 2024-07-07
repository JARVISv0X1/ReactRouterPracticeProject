import { Link, json, redirect, useNavigate } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const navigate = useNavigate();
  async function startDeleteHandler() {
    // ...
    const response = await fetch(`http://localhost:5005/events/${event.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw json({ message: "Error Deleting Event" }, { status: 500 });
    }
    return navigate("/events");
  }
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
