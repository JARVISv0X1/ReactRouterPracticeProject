import { Link, json, useNavigate } from "react-router-dom";
import classes from "./EventItem.module.css";
import { toast } from "react-toastify";

function EventItem({ event }) {
  const navigate = useNavigate();
  async function startDeleteHandler() {
    // ...
    const response = await fetch(`http://localhost:5005/events/${event.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message);
      throw json({ message: "Error while adding data" }, { status: 500 });
    }
    const responseData = await response.json();
    toast.success(responseData.message);
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
