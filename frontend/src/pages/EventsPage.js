import { Link } from "react-router-dom";
import { eventList } from "../eventList";
export default function EventsPage() {
  return (
    <>
      <h3>List of event </h3>
      <ul>
        {eventList.map((list) => {
          return (
            <li>
              <Link to={`/events/${list.id}`}>{list.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
