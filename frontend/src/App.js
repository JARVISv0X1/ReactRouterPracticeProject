// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventPageLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { eventPageDetailLoader } from "./pages/EventDetail";
import EditEventPage, { action as editEventAction } from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRootLayout";
import ErrorPage from "./pages/ErrorPage";
import { action as addNewEventAction } from "./pages/NewEventPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/NewsletterPage";

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
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        {
          path: "/events/",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventPageLoader,
            },
            {
              path: "new",
              element: <NewEventPage></NewEventPage>,
              action: addNewEventAction,
            },
            {
              path: ":id",
              loader: eventPageDetailLoader,
              id: "eventData",
              children: [
                {
                  index: true,
                  element: <EventDetailPage></EventDetailPage>,
                  // loader: ({ params }) => {
                  //   return eventPageDetailLoader(params.id);
                  // },
                },
                {
                  path: "edit",
                  element: <EditEventPage></EditEventPage>,
                  loader: eventPageDetailLoader,
                  action: editEventAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: editEventAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer stacked />
    </>
  );
}

export default App;
