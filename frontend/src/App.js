// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRootLayout";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        {
          path: "/events/",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: async () => {
                const response = await fetch("http://localhost:5005/events");

                if (!response.ok) {
                  // setError("Fetching events failed.");
                } else {
                  const resData = await response.json();
                  // setFetchedEvents(resData.events);
                  return resData.events;
                }
              },
            },
            { path: "new", element: <NewEventPage></NewEventPage> },
            {
              path: ":id",
              element: <EventDetailPage></EventDetailPage>,
            },
            {
              path: ":id/edit",
              element: <EditEventPage></EditEventPage>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
